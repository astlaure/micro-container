sudo a2enmod proxy
sudo a2enmod proxy_http

```text
<VirtualHost microfrontend.local:80>
	ProxyPass /clientapi http://localhost:3001
	ProxyPassReverse /clientapi http://localhost:3001

	ProxyPass /policyapi http://localhost:3002
	ProxyPassReverse /policyapi http://localhost:3002

	ProxyPass / http://localhost:3000/
	ProxyPassReverse / http://localhost:3000/
</VirtualHost>
```