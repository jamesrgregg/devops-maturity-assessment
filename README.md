# devops-maturity-assessment

[![Lint using super-linter](https://github.com/jamesrgregg/devops-maturity-assessment/actions/workflows/linter.yml/badge.svg)](https://github.com/jamesrgregg/devops-maturity-assessment/actions/workflows/linter.yml) [![DevOps Pipeline](https://github.com/jamesrgregg/devops-maturity-assessment/actions/workflows/devops-pipeline.yml/badge.svg)](https://github.com/jamesrgregg/devops-maturity-assessment/actions/workflows/devops-pipeline.yml)

## DevOps Maturity Assessment Tool

DevOps Maturity Assessment offers the means to gather information about the current state of capabilities, methodologies and practices.

It offers the means to identify areas of improvement in the following areas:

- Deployment Frequency
- Lead Time for Changes
- Time to Restore Service
- Change Failure Rate

It should outline the steps required to achieve desired state towards DevOps maturity assessment goals.

## Purpose of this Application

This is a rapid prototype application with integration to Chainloop.

It was initially AI generated with [Bolt.diy](https://github.com/stackblitz-labs/bolt.diy) and [Copilot](https://copilot.microsoft.com/).

## Demo

We want to demo a developer flow using a modern AI solution such as Bolt.diy where the AI bot can look at a repository, inventory the code and create a workflow that does the following:

- inventory
- source code checkout
- set up a build environment
- build
- test
- scan
- create an SBOM
- create the attestation for SLSA Level3
- push artifacts
- package the application (containerize the software)
- release the package as a versioned artifact

Example Diagram of this pipeline can be found [here](https://github.com/arena-si-devops/docs/blob/main/DevOps-Best-Practice/ai-advanced-pipeline.md)

## Advanced DevOps Pipeline

```mermaid
graph TD
    A[AI Inventory & Describe Source Code] --> B[Identify Workflows]
    B --> C[Create Required Workflow based on Code Language]
    C --> D[Run Workflow]
    D --> E[Build]
    E --> F[Test]
    F --> G[Scan]
    G --> H[SBOM Generation]
    H --> I[Attestation - SLSA Level 3]
    I --> J[Push Artifacts]
    J --> K[Package]
    K --> L[Release]
```
