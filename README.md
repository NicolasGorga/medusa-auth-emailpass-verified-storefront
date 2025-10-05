# Medusa Auth Email Pass Verified storefront example

## Overview

MedusaJS NextJS storefront starter with minimal modifications, including a callback validation route, to test [@nicogorga/medusa-auth-emailpass-verified](https://github.com/NicolasGorga/medusa-auth-emailpass-verified) faster

## Prerequisites

- @nicogorga/medusa-auth-emailpass-verified [prerequisites](https://github.com/NicolasGorga/medusa-auth-emailpass-verified)

## Installation

1\. Install dependencies

```bash
yarn install
```

2\. Setup environment variables

```bash
mv .env.template .env.local
```

3\. Setup env variable NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY in .env.local, with the one obtained from you backend dashboard

## Test the Plugin

1\. Initialize the storefront running:

```bash
yarn dev
```

2\. Login with user and password. If this is the first time, a message saying an email was sent for verification will appear. 

3\. Verify your address by opening the email received and following the link. This will open up the /auth/emailpass-verified/customer page, which will complete the auth flow and register the customer.