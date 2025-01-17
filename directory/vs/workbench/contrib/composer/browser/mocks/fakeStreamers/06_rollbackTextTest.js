import '../../../../../../../require.js';
import '../../../../../../../exports.js';
define(de[3036], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.rollbackTextTest = void 0),
				(e.rollbackTextTest = {
					id: "06_rollbackText",
					content: `I understand you want to simplify the rollback process to just mark a specific backend tag as bad in MemoryDB. Let's modify the relevant files to achieve this. We'll focus on updating \`setMemorydbRollbackFlags.ts\` and \`rollback-backend.yml\`.
First, let's update \`setMemorydbRollbackFlags.ts\`:
\`\`\`typescript:backend/scripts/src/setMemorydbRollbackFlags.ts
// ... existing imports ...
async function main() {
  const argv = await yargs(hideBin(process.argv))
    .option('slack-message-ts', { type: 'string', demandOption: true })
    .option('slack-channel-id', { type: 'string', demandOption: true })
    .option('slack-bot-token', { type: 'string', demandOption: true })
    .option('rollback-tag', { type: 'string', demandOption: true })
    .parse();
  const slack = new WebClient(argv.slackBotToken);
  let deploymentStateManager: DeploymentStateManager | null = null;
  try {
    deploymentStateManager = new DeploymentStateManager({ type: 'external' });
    // Mark the tag as bad
    const [flagsSet, error] = await deploymentStateManager.External_markTagAsBad(argv.rollbackTag);
    if (error) {
      throw error;
    }
    // Log the action
    tracerLogger.info(\`Marked tag \${argv.rollbackTag} as bad\`);
    // Send success message to Slack
    await sendSuccessMessage(slack, argv, flagsSet);
  } catch (error) {
    tracerLogger.error({ error }, 'Error setting MemoryDB flags');
    // Send error message to Slack
    await sendError(slack, argv, error);
    process.exit(1);
  } finally {
    // Close the DeploymentStateManager connection
    if (deploymentStateManager) {
      await deploymentStateManager.close();
    }
  }
}
// ... existing helper functions ...
async function sendSuccessMessage(slack: WebClient, argv: any, flagsSet: string[]) {
  await slack.chat.postMessage({
    channel: argv.slackChannelId,
    blocks: [{
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: \`:white_check_mark: Tag marked as bad in MemoryDB:
* Bad tag: \${argv.rollbackTag}
* Actions performed:
\\\`\\\`\\\`
\${flagsSet.join('\\n')}
\\\`\\\`\\\`
\`,
      },
    }],
  });
}
// ... rest of the file ...
\`\`\`
Now, let's update the \`rollback-backend.yml\` workflow:
\`\`\`yaml:.github/workflows/rollback-backend.yml
name: Rollback backend
on:
  workflow_dispatch:
    inputs:
      slack_message_ts:
        description: "Slack message timestamp of source message"
        type: string
        required: true
      slack_channel_id:
        description: "Slack channel ID of source message"
        type: string
        required: true
      slack_user:
        description: "Slack user who issued the command"
        type: string
        required: true
      rollback_tag:
        description: "The backend tag to mark as bad"
        type: string
        required: true
jobs:
  rollback:
    name: Rollback
    runs-on: build-machine
    concurrency: deploy
    defaults:
      run:
        shell: bash
        working-directory: /home/ubuntu/deploys/everysphere-anybot/backend/scripts
    steps:
      - name: Set the MemoryDB rollback flag
        run: |
          source /home/linuxbrew/.linuxbrew/opt/nvm/nvm.sh
          nvm use
          node --experimental-transform-types ./src/setMemorydbRollbackFlags.ts \\
            --slack-message-ts \${{ inputs.slack_message_ts }} \\
            --slack-channel-id \${{ inputs.slack_channel_id }} \\
            --slack-bot-token \${{ secrets.DEPLOY_SLACK_BOT_TOKEN }} \\
            --rollback-tag \${{ inputs.rollback_tag }}
  status:
    name: Status
    needs: rollback
    runs-on: ubuntu-latest
    steps:
      - name: Status Tracking
        uses: anysphere/slack-action-status@main
        env:
          STATUS_CHECKOUT_EMOJI: \u{1F519}
          STATUS_BOOTSTRAP_EMOJI: \u{1F3D7}
          STATUS_BUILD_EMOJI: \u{1F527}
          STATUS_RELEASE_EMOJI: \u{1F4E1}
        with:
          deploy-description: "Marked backend tag \`\${{ inputs.rollback_tag }}\` as bad in MemoryDB"
          step-identifier: d6e26720-da42-4908-8eb9-46667deef133
          slack-bot-token: \${{ secrets.DEPLOY_SLACK_BOT_TOKEN }}
          slack-channel-id: \${{ inputs.slack_channel_id }}
          log-job-name: Rollback
\`\`\`
These changes simplify the rollback process to focus solely on marking a specific backend tag as bad in MemoryDB. Here's a summary of the updates:
1. In \`setMemorydbRollbackFlags.ts\`:
   - Simplified the command-line arguments to only require the necessary information.
   - Removed the logic for handling 'stable' tags and checking available tags.
   - Updated the main function to directly mark the provided tag as bad.
2. In \`rollback-backend.yml\`:
   - Simplified the workflow inputs to only require the necessary information.
   - Removed unnecessary steps and environment variables.
   - Updated the \`setMemorydbRollbackFlags.ts\` call to use the new, simplified arguments.
To use this new rollback process, you would trigger the workflow with the backend tag you want to mark as bad. The workflow will then use \`setMemorydbRollbackFlags.ts\` to mark that tag as bad in MemoryDB and send a Slack notification about the action.
You'll need to update the \`deploy.js\` script to trigger this workflow with the correct inputs when the rollback command is issued.`,
				});
		}),
		