import AWS from "aws-sdk";

const AWS_S3_ACCESS_KEY = "3rf344jtreghe";
const AWS_S3_SECRET_KEY = "ef9egejgfe";

const s3Bucket = new AWS.S3({
    accessKeyId: AWS_S3_ACCESS_KEY,
    secretAccessKey: AWS_S3_SECRET_KEY,
    region: "ap-south-1"
});


export const s3Upload = (options) => {
    return new Promise((resolve, reject) => {
        s3Bucket.upload(options, (err, data) => {
            if (error) return reject(error);
            return resolve(data);
        })
    });
};