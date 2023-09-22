### Brief Guide on How to Setup AWS CloudFront with Name.com as the Domain Registry.
Steps - 
1. Purchase Domain(s) on Name.com
2. Sign into the [AWS Console](https://console.aws.amazon.com/console/home)
3. Navigate to AWS Certificate Manager (ACM)
4. Setup a certificate for both `*.domainName.com` && `www.domainName.com` and with the standard DNS Validation and RSA-2048 Key Algorithm.
5. Navigate back to Name.com and go to the DNS Setting for the domainName.com
6. In order to validate ownership of the domain, copy & paste the DNS Verification Records from the Newly Created Certificate from AWS Certificate Manager into the DNS Management on Name.com (Note - this could take a few mins to validate)
7. Now that the domain is validated, we need to setup the remaining AWS Resources (in this case an S3 Bucket and CloudFront).
8. Setup the S3 bucket like any other bucket - with `Static Website Hosting` **disabled**
9. Setup a CloudFront Distribution in the same region as the S3 Bucket (i.e. us-east-1) in order to make setup easier
10. The CloudFront Distribution should use `All Edge Locations`, `HTTP/2, HTTP/1.1, HTTP/1.0`, be connected to the `SSL Certificate` that was created earlier (pickable in a dropdown option), `TLSv1.2_2021` security option, `Redirect HTTP to HTTPS`, and other setting for the `index` page and `error` pages.
11. Now, we need to ensure there is a CI/CD pipeline from GitHub.com to the AWS resource(s) - in this case, we built a static website built with [Astro](https://astro.build/) and a CI/CD workflow on GitHub.com as the source code repository location.
12. The code below is the GitHub Action required to make the code build & deploy when something is `merged` or `pushed` to the `main` branch. Step 14 is where the various Secrets - 
```yml
name: Deploy Website to Amazon S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - name: Install modules
        run: npm ci
      - name: Build application
        run: npm run build
      - name: Deploy to S3
        run: aws s3 sync --delete ./dist/ s3://${{ secrets.BUCKET_ID }}
      - name: Create CloudFront invalidation
        run: aws cloudfront create-invalidation --distribution-id ${{ secrets.DISTRIBUTION_ID }} --paths "/*"
```
13. As you can see from the `.github/workflows/deploy.yml` file above, you need a few secrets stored in GitHub.com on the repository. You can access this Secret Store under the `Settings` tab of your repo.
14. In the AWS Console, navigate to the [IAM Policies Page](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/policies) - and with the policy below - 
```yml
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:ListBucket",
                "s3:DeleteObject",
                "cloudfront:CreateInvalidation"
            ],
            "Resource": [
                "arn:aws:cloudfront::177283549651:distribution/[GET_THE_CLOUDFRONT_DISTRIBUTION_FROM_THE_MAIN_PAGE]",
                "arn:aws:s3:::[S3_BUCKET_NAME]*",
                "arn:aws:s3:::[S#_BUCKET_NAME]"
            ]
        }
    ]
}
```
15. The policy, when added to an IAM Entity (i.e. User) will allow for various operations that are required for CI/CD.
16. Create a new [IAM User](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users) with the newly created policy and navigate to the `Security Credentials` tab to create a new `Access Key`.
17. Copy and paste those values from the AWS Console into the Github Secret Store for you repository.
18. Navigate to both the S3 Bucket and the CloudFront Distribution to copy & paste the relevant secrets (i.e. `BUCKET_ID` & `DISTRIBUTION_ID`) into GitHub.com Secret Store.
19. We're nearly there, now we need to create a [Route 53 Hosted Zone](https://us-east-1.console.aws.amazon.com/route53/v2/home?region=us-east-1#Dashboard) (AWS' name server tool) in order to handle requests to both `*.domainName.com` & `www.domainName.com`.
20. Create a Hosted Zone for your `domainName.com` and create both `A` and `AAAA` records for both `*.domainName.com` and `www.domainName.com` (in total, 4 new records). You will do `Simple Routing` and `Alias to CloudFront Distribution` and select your new CloudFront Distribution in the typeahead/dropdown.
21. Now that there is a "new" name server (Route 53), we need to change the Name Server config on Name.com
22. Copy and paste the AWS Route 53 Name Servers from the `Hosted Zone Details` pane into Name.com.
23. Save the new AWS Name Server Records & delete the old `[ns1-ns4].name.com` name server records
  - **NOTE** - If you have a custom email / simple email forwarding already setup on Name.com (via a MX DNS record), it will break it since Name.com is now longer the name server.
25. As mentioned above, if you want to setup email forwarding for any email that goes to `*@domainName.com` to your personal `email@provider.com`, utilize a tool like [improvMX.com](https://improvmx.com/). It takes ~5 minutes to setup and you can even send emails from `*@gmail.com` but make them look like their from `*@domainName.com`.

If there are issues with the above, ensure that your DNS has propagated with a [tool like this](https://www.whatsmydns.net/).
