# Medical code search

This is a tool to search for medical codes (ICD-10, CPT, etc.) using full-text search.

To avoid copyright issues, this is "bring your own codes". I include some instructions for how you can legally obtain the codes, as well as scripts to parse the codes and incorporate them into the app.

## Setup

Run `yarn` to install deps.

### ICD-10

- Go to [the CDC ICD-10 files page](https://www.cdc.gov/nchs/icd/icd-10-cm/files.html)
- Click the latest link
- Download the "code descriptions" zip file
- Extract the "codes" `.txt` file
- Run `node scripts/write-icd-10-codes.js /path/to/codes.txt`

### CPT

- Sign up for the [CPT Developer Program](https://platform.ama-assn.org/ama/#/dev-program) and get a license. Note that if you're using this API to work on the development of this tool, you can apply for a free development license instead of a standard production license. If you are using this tool in a production environment, be sure to get the appropriate license.
- Wait for your license to be approved
- Go to [the CPTAPI_Zip API](https://platform.ama-assn.org/ama/#/dev-program/portal/api) in the portal
- Click "Subscriptions"
- Create a subscription, then create and copy an access token under it
- Click "Try Out"
- Paste in your access token
- Run the `/files` API with no parameters
- Click "Download file"
- Extract the zip
- Copy the path to `[year] Standard Update [#]/Current Format/Primary Data Files/ConsolidatedCodeList.txt`
- Run `node scripts/write-cpt-codes.js /path/to/ConsolidatedCodeList.txt`

## Dev

`yarn dev`

## Build

`yarn build`, then share `build/index.html`
