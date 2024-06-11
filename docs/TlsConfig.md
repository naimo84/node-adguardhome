# AdGuardHome.TlsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | enabled is the encryption (DoT/DoH/HTTPS) status | [optional] 
**serverName** | **String** | server_name is the hostname of your HTTPS/TLS server | [optional] 
**forceHttps** | **Boolean** | if true, forces HTTP-&gt;HTTPS redirect | [optional] 
**portHttps** | **Number** | HTTPS port. If 0, HTTPS will be disabled. | [optional] 
**portDnsOverTls** | **Number** | DNS-over-TLS port. If 0, DoT will be disabled. | [optional] 
**portDnsOverQuic** | **Number** | DNS-over-QUIC port. If 0, DoQ will be disabled. | [optional] 
**certificateChain** | **String** | Base64 string with PEM-encoded certificates chain | [optional] 
**privateKey** | **String** | Base64 string with PEM-encoded private key | [optional] 
**privateKeySaved** | **Boolean** | Set to true if the user has previously saved a private key as a string.  This is used so that the server and the client don&#39;t have to send the private key between each other every time, which might lead to security issues.  | [optional] 
**certificatePath** | **String** | Path to certificate file | [optional] 
**privateKeyPath** | **String** | Path to private key file | [optional] 
**validCert** | **Boolean** | Set to true if the specified certificates chain is a valid chain of X509 certificates.  | [optional] 
**validChain** | **Boolean** | Set to true if the specified certificates chain is verified and issued by a known CA.  | [optional] 
**subject** | **String** | The subject of the first certificate in the chain. | [optional] 
**issuer** | **String** | The issuer of the first certificate in the chain. | [optional] 
**notBefore** | **String** | The NotBefore field of the first certificate in the chain.  | [optional] 
**notAfter** | **String** | The NotAfter field of the first certificate in the chain.  | [optional] 
**dnsNames** | **[String]** | The value of SubjectAltNames field of the first certificate in the chain.  | [optional] 
**validKey** | **Boolean** | Set to true if the key is a valid private key. | [optional] 
**keyType** | **String** | Key type. | [optional] 
**warningValidation** | **String** | A validation warning message with the issue description.  | [optional] 
**validPair** | **Boolean** | Set to true if both certificate and private key are correct.  | [optional] 
**servePlainDns** | **Boolean** | Set to true if plain DNS is allowed for incoming requests.  | [optional] 



## Enum: KeyTypeEnum


* `RSA` (value: `"RSA"`)

* `ECDSA` (value: `"ECDSA"`)




