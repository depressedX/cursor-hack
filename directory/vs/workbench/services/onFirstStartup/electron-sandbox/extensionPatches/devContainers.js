import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[3510], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Bcd = void 0);
			function t(i) {
				return i.replace(
					'let l=`https://update.code.visualstudio.com/commit:${n}/server-${e.id}${o?"-web":""}/${r}`',
					"let l=`https://cursor.blob.core.windows.net/remote-releases/${n}/vscode-reh-${e.id}.tar.gz`",
				);
			}
			e.$Bcd = {
				extensionId: "ms-vscode-remote.remote-containers",
				fixes: [
					{ relativeFilePath: "dist/extension/extension.js", replaceFn: t },
				],
			};
		}),
		