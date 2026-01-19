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

TODO

## Dev

`yarn dev`

## Build

`yarn build`, then share `build/index.html`
