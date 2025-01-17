import '../../../../../../../require.js';
import '../../../../../../../exports.js';
define(de[3038], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.pythonExplanationTest = void 0),
				(e.pythonExplanationTest = {
					id: "08_pythonExplanationTest",
					content: `Let me explain how this script works step by step:
1. The script is designed to copy data between different Azure storage accounts and buckets. Let's break down the main components:

2. Configuration:
- Two lists are defined at the top:

\`\`\`5:16:services/copy_retrieval_buckets/copy_retrieval_buckets.py
LANCEDB_BUCKETS = [
    'lancedb/caselaw/france_case/',
    'lancedb/caselaw/us_case/version_20240501.lance/',
    'lancedb/from-counsel/',
    # Just copy the whole bucket for now for faster prototyping.
    'cuatre/',
    'workforce/',
    'caselaw-sweden/',
    'macfarlanes/',
    'lancedb/memos/',
    'lancedb/eurlex/',
]
\`\`\`

This defines \`LANCEDB_BUCKETS\` containing paths for various data sources like caselaw, memos, etc.

\`\`\`18:22:services/copy_retrieval_buckets/copy_retrieval_buckets.py
RETRIEVAL_BUCKETS = [
    'retrieval',
    'source',
    'hr-workflow',
]
\`\`\`

This defines \`RETRIEVAL_BUCKETS\` with basic bucket names.

3. Storage Account Mapping:
\`\`\`27:44:services/copy_retrieval_buckets/copy_retrieval_buckets.py
SOURCE_DESTINATION_STORAGE_ACCOUNTS = [
    # Copy from the dev bucket to all staging locations.
    ('retrievalblockhaidwus', 'retrievalblockhaiswus', LANCEDB_BUCKETS),
    ('retrievalblockhaidwus', 'retrievalblockhaiseus', LANCEDB_BUCKETS),
    ('retrievalblockhaidwus', 'retrievalblockhaisweu', LANCEDB_BUCKETS),
    ('retrievalblockhaidwus', 'retrievalblockhaisgwc', LANCEDB_BUCKETS),
    # Copy from the given staging location to the given prod location.
    ('retrievalblockhaiswus', 'retrievalblockhaipwus', LANCEDB_BUCKETS),
    ('retrievalblockhaiseus', 'retrievalblockhaipeus', LANCEDB_BUCKETS),
    ('retrievalblockhaisweu', 'retrievalblockhaipweu', LANCEDB_BUCKETS),
    ('retrievalblockhaisgwc', 'retrievalblockhaipgwc', LANCEDB_BUCKETS),
]
\`\`\`

\`SOURCE_DESTINATION_STORAGE_ACCOUNTS\` defines tuples of:
- Source storage account
- Destination storage account
- Which bucket list to copy (either LANCEDB_BUCKETS or RETRIEVAL_BUCKETS)

4. Main Logic:
\`\`\`47:69:services/copy_retrieval_buckets/copy_retrieval_buckets.py
def main(dry_run: bool):
    for source_storage_account, dest_storage_account, buckets in SOURCE_DESTINATION_STORAGE_ACCOUNTS:
        for bucket in buckets:
            if dry_run:
                print(f'Dry running copying {bucket} from {source_storage_account} to {dest_storage_account}')
            else:
                print(f'Copying {bucket} from {source_storage_account} to {dest_storage_account}')
            cmd = [
                'azcopy',
                'sync',
                f'https://{source_storage_account}.blob.core.windows.net/{bucket}',
                f'https://{dest_storage_account}.blob.core.windows.net/{bucket}',
                '--s2s-preserve-access-tier=false',
                '--log-level=INFO',
            ]
            if dry_run:
                cmd.append('--dry-run')
            subprocess.run(cmd, check=True)
\`\`\`

The script is designed to:
- Copy data between Azure storage accounts in an organized way
- Support both development->staging->production promotion paths
- Allow dry runs to verify what would be copied
- Use azcopy's sync functionality for efficient transfers`,
				});
		}),
		