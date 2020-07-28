import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

declare var TextDecoder;

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor() {
  	AWS.config.credentials = new AWS.Credentials({
  		accessKeyId: 'key',
  		secretAccessKey: 'secret'
  	});

  	const params = {
  		Bucket: '',
  		Key: ''
  	};

  	let s3 = new AWS.S3();

  	s3.getObject(params, function(err, data) {
  		if (err) {
  			console.error(err);
  		}
  		else {
  			const string = new TextDecoder('utf-8').decode(data.Body);
  			console.log(string);
  		}
  	});
  }
}
