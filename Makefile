PHONY: github aws-assets aws-htmljs aws-cache live

github:
	rm -rf docs
	cp -r dist/ docs
	git add -A
	git commit -m "update dev version"
	git push

archive:
	zip -r archive.zip dev

aws-assets:
	aws s3 sync dist s3://pudding.cool/process/pudding-awards-2018 --delete --cache-control 'max-age=31536000' --exclude 'index.html' --exclude 'bundle.js'

aws-htmljs:
	aws s3 cp dist/index.html s3://pudding.cool/process/pudding-awards-2018/index.html
	aws s3 cp dist/bundle.js s3://pudding.cool/process/pudding-awards-2018/bundle.js

aws-cache:
	aws cloudfront create-invalidation --distribution-id E13X38CRR4E04D --paths '/process/pudding-awards-2018*'	

pudding: aws-assets aws-htmljs aws-cache archive
