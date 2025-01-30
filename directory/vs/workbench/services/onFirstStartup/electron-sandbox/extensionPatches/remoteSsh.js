import '../../../../../../require.js';
import '../../../../../../exports.js';
import './types.js';
define(de[3514], he([1, 0, 1851]), function (ce /*require*/,
 e /*exports*/,
 t /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Fcd = void 0);
			function i(m, r) {
				let u = m;
				return (
					(u = (0, t.$Acd)(
						u,
						"https://update.code.visualstudio.com/commit:$commitId/$an/$quality",
						"https://cursor.blob.core.windows.net/remote-releases/$commitId/$an.tar.gz",
						r,
					)),
					(u = (0, t.$Acd)(
						u,
						"https://update.code.visualstudio.com/commit:$commitId/$serverName/$quality",
						"https://cursor.blob.core.windows.net/remote-releases/$commitId/$serverName.tar.gz",
						r,
					)),
					(u = (0, t.$Acd)(
						u,
						'function GetArtifactName {\\n\\t$webPart = "${v?"-web":""}"\\n\\t"server-win32-x64" + $webPart\\n}',
						'function GetArtifactName {\\n\\t$webPart = "${v?"-web":""}"\\n\\t"vscode-reh-win32-x64" + $webPart\\n}',
						r,
					)),
					u
				);
			}
			function w(m, r) {
				let u = m;
				return (
					(u = (0, t.$Acd)(
						u,
						"DOWNLOAD_URL=https://update.code.visualstudio.com/commit:$COMMIT_ID/$PLATFORM_DOWNLOAD_PATH/${t}",
						"DOWNLOAD_URL=https://cursor.blob.core.windows.net/remote-releases/$COMMIT_ID/$PLATFORM_DOWNLOAD_PATH.tar.gz",
						r,
					)),
					(0, t.$Acd)(
						u,
						'CLI_NAME_IN_ARCHIVE=${"stable"===t?"code":"code-insiders"}',
						"CLI_NAME_IN_ARCHIVE=cursor",
						r,
					)
				);
			}
			function E(m, r) {
				let u = m;
				return (
					(u = (0, t.$Acd)(
						u,
						'DOWNLOAD_URL=https://update.code.visualstudio.com/commit:$COMMIT_ID/$PLATFORM_DOWNLOAD_PATH${S?"-web":""}/${n}',
						'DOWNLOAD_URL=https://cursor.blob.core.windows.net/remote-releases/$COMMIT_ID/$PLATFORM_DOWNLOAD_PATH${S?"-web":""}.tar.gz',
						r,
					)),
					(u = (0, t.$Acd)(
						u,
						'if [[ $PLATFORM == linux ]]; then\\n\\tPLATFORM_DOWNLOAD_PATH=server-linux-$VSCODE_ARCH\\nelif [[ $VSCODE_ARCH == "arm64" ]]; then\\n\\tPLATFORM_DOWNLOAD_PATH=server-darwin-arm64\\nelse\\n\\tPLATFORM_DOWNLOAD_PATH=server-darwin\\nfi',
						'if [[ $PLATFORM == linux ]]; then\\n\\tPLATFORM_DOWNLOAD_PATH=vscode-reh-linux-$VSCODE_ARCH\\nelif [[ $VSCODE_ARCH == "arm64" ]]; then\\n\\tPLATFORM_DOWNLOAD_PATH=vscode-reh-darwin-arm64\\nelse\\n\\tPLATFORM_DOWNLOAD_PATH=vscode-reh-darwin\\nfi',
						r,
					)),
					(u = (0, t.$Acd)(
						u,
						'if [[ $PLATFORM == linux ]]; then\\n\\t\\tPLATFORM_DOWNLOAD_PATH=server-linux-legacy-$VSCODE_ARCH\\n\\telif [[ $VSCODE_ARCH == "arm64" ]]; then\\n\\t\\tPLATFORM_DOWNLOAD_PATH=server-darwin-arm64\\n\\telse\\n\\t\\tPLATFORM_DOWNLOAD_PATH=server-darwin\\n\\tfi',
						'if [[ $PLATFORM == linux ]]; then\\n\\t\\tPLATFORM_DOWNLOAD_PATH=vscode-reh-linux-$VSCODE_ARCH\\n\\telif [[ $VSCODE_ARCH == "arm64" ]]; then\\n\\t\\tPLATFORM_DOWNLOAD_PATH=vscode-reh-darwin-arm64\\n\\telse\\n\\t\\tPLATFORM_DOWNLOAD_PATH=vscode-reh-darwin\\n\\tfi',
						r,
					)),
					(0, t.$Acd)(
						u,
						"mv vscode-server*/* .",
						"mv $PLATFORM_DOWNLOAD_PATH*/* .",
						r,
					)
				);
			}
			function C(m, r) {
				let u = m;
				return (
					(u = (0, t.$Acd)(
						u,
						"return`https://update.code.visualstudio.com/commit:${t.commit}/${e.artifact}/${t.quality}`",
						"return`https://cursor.blob.core.windows.net/remote-releases/${t.commit}/${e.artifact}.tar.gz`",
						r,
					)),
					u
				);
			}
			function d(m, r) {
				let u = m;
				return (u = E(u, r)), (u = i(u, r)), (u = w(u, r)), (u = C(u, r)), u;
			}
			e.$Fcd = {
				extensionId: "ms-vscode-remote.remote-ssh",
				fixes: [{ relativeFilePath: "out/extension.js", replaceFn: d }],
			};
		}),
		