## Mandatory assignments

**Assignment 4:**

Sync your changes to s3 and write down your s3 bucket url.

bucket url: `https://s3.console.aws.amazon.com/s3/buckets/rajani-week2-homework?region=us-east-1&tab=objects`

**Assignment 5:**

Right now, the website does not support https. Explain which other AWS service needs to be integrated in order to achieve this.

service name: `AWS Certificate Manager` (https://aws.amazon.com/certificate-manager/)

**Assignment 6:**

Figure out and write down the price per month of storing 51TB on S3.

Price: `1172 USD (for first 50 TB / Month costs 23usd and after 1TB cost 22usd)`
Calculations : 1 TB = 1000 GB, 
For first 50 TB, it costs 0.023 per GB i.e 1 TB cost 23 USD,
 for first 50 TB = 23*50 = 1150 USD,
       next 1TB = 22 * 1= 22USD 
                  51 TB  = 1172 USD
 
Total size of website: `Total Size: 494.9 KiB`
(aws s3 ls s3://rajani-week2-homework --recursive --human-readable --summarize)

**Assignment 7:**

Write down the main cost factors for S3

brief description: `
Seven factors that affect Amazon S3 pricing
The region where you store your data
The volume of data you store
The level of redundancy
The storage class
Data requests
Data transfers
Data retrievals (Glacier only)`

**Assignment 8:**

The file `week2/assignments/products.json` needs to be uploaded Inside the bucket `hyf-serverless-course-week-2`. Upload the file through the CLI and write down the command needed.

docs:aws s3 cp Desktop/hyf-serverless-hm/week2/materials/homework/products.json s3://rajani-week2-homework

**Assignment 9:**
Write down a brief use case on when S3 could be used for a data engineering assignment: 

use case: `AWS Data Engineering ensures fast querying to run Data Analytics on a massive volume of data and feed data to different Business Intelligence Tools, Dashboards, and other applications.
Amazon Kinesis Data Analytics is the easiest way to analyze streaming data, gain actionable insights, and respond to your business and customer needs in real time. Amazon Kinesis Data Analytics reduces the complexity of building, managing, and integrating streaming applications with other AWS services.`

command:

## Optional assignments: 

**Assignment 10:**

What can be done to reduce the pricing for S3 when hosting a large number of files?

brief description: `Clean up incomplete multipart uploads.
Delete previous versions of objects that you don't need.
Review your storage-class transition costs.
Review your data retrieval costs.
Track the requests made to your bucket.
Check for changes in the size of your bucket.
Review the cost of individual buckets.
Understand how your usage relates to your charges` 

**Assignment 11:**

There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.

brief description of favourite security feature: `AWS s3 offers server-side encryption (https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)` 
