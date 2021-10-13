import AWS from "aws-sdk";

// const AWS_S3_ACCESS_KEY = "AKIAQ7WNKDA6BLJQIT5C";
// const AWS_S3_SECRET_KEY = "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";

const s3Bucket = new AWS.S3({
    accessKeyId: "AKIAQ7WNKDA6BLJQIT5C",
    secretAccessKey: "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",
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