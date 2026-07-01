# Ko-fi Profile Copy

Date: 2026-06-14

Use this as paste-ready source copy for `https://ko-fi.com/tzaporg`.

## Profile Name

tzap

## Short Bio

Open archive format and Rust reference implementation for fast, encrypted,
recoverable archives.

## Suggested Button Text

Support tzap

## About

tzap is an open archive format and Rust reference implementation for fast,
encrypted, recoverable archives.

It is built for archives people may need to trust years from now: private
datasets, source records, media libraries, research data, legal material, and
cold backups.

One command should be enough. No stitching together tar, compression,
encryption, checksums, parity files, split-volume naming, and restore logic by
hand.

tzap focuses on:

- Fast compression with Zstandard.
- Encryption for private archive contents, names, metadata, and indexes.
- Explicit plaintext mode for public, recovery-focused archives.
- Authenticated metadata and payloads.
- Reed-Solomon recovery for damaged or missing volumes.
- Split-volume archives for drives, discs, object storage, and offline sets.
- Targeted restores from very large archives without unpacking everything.
- An open specification, open implementation, tests, and fuzz targets.

## Why Support tzap

Archives often outlive the computers, cloud accounts, drives, and operating
systems that created them. Reliable archive software needs more than a first
release; it needs packaging, compatibility fixtures, damage testing,
documentation, security review, and steady maintenance.

Ko-fi support helps fund focused chunks of work: release passes, cross-platform
packaging, documentation polish, recovery testing, compatibility fixtures, issue
triage, and the quiet maintenance that keeps tools trustworthy.

## Current Priorities

- Publish reliable release artifacts for macOS, Linux, and Windows.
- Keep checksums, install notes, and release notes clear.
- Grow damaged-archive and missing-volume recovery fixtures.
- Keep the public format specification aligned with the Rust implementation.
- Improve examples for encrypted archives, plaintext public archives, split
  volumes, and targeted restores.
- Maintain dependencies, fuzz targets, regression tests, and security review
  capacity.
- Support ZManager CLI integration so `.tzap` workflows fit into a practical
  archiving toolchain.

## Useful Links

- Website: `https://tzap.org`
- Sponsor page: `https://tzap.org/sponsor/`
- Reference implementation: `https://github.com/tzap-org/tzap`
- GitHub organization: `https://github.com/tzap-org`
- Open Collective: `https://opencollective.com/tzap-org`

## Short Update Post

Thanks for supporting tzap.

The project is focused on making long-term archives more dependable: encrypted
private archives, explicit plaintext mode for public archives, authenticated
metadata, split volumes, recovery data, and targeted restores from large
datasets.

Support here helps keep the practical work moving: releases, packaging,
documentation, compatibility fixtures, recovery tests, security review, and
maintenance.
