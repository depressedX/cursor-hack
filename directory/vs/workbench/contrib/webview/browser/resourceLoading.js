import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/extpath.js';
import '../../../../base/common/network.js';
import '../../../../base/common/path.js';
import '../../../../base/common/uri.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/webview/common/mimeTypes.js';
define(
			de[3211],
			he([1, 0, 249, 23, 54, 9, 22, 2888]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.WebviewResourceResponse = void 0),
					(e.$d6c = r);
				var m;
				(function (c) {
					let n;
					(function (o) {
						(o[(o.Success = 0)] = "Success"),
							(o[(o.Failed = 1)] = "Failed"),
							(o[(o.AccessDenied = 2)] = "AccessDenied"),
							(o[(o.NotModified = 3)] = "NotModified");
					})((n = c.Type || (c.Type = {})));
					class g {
						constructor(f, b, s, l) {
							(this.stream = f),
								(this.etag = b),
								(this.mtime = s),
								(this.mimeType = l),
								(this.type = n.Success);
						}
					}
					(c.StreamSuccess = g),
						(c.Failed = { type: n.Failed }),
						(c.AccessDenied = { type: n.AccessDenied });
					class p {
						constructor(f, b) {
							(this.mimeType = f),
								(this.mtime = b),
								(this.type = n.NotModified);
						}
					}
					c.NotModified = p;
				})(m || (e.WebviewResourceResponse = m = {}));
				async function r(c, n, g, p, o) {
					p.debug(`loadLocalResource - begin. requestUri=${c}`);
					const f = u(c, n.roots);
					if (
						(p.debug(
							`loadLocalResource - found resource to load. requestUri=${c}, resourceToLoad=${f}`,
						),
						!f)
					)
						return m.AccessDenied;
					const b = (0, d.$c6c)(c);
					try {
						const s = await g.readFileStream(f, { etag: n.ifNoneMatch }, o);
						return new m.StreamSuccess(s.value, s.etag, s.mtime, b);
					} catch (s) {
						return s instanceof C.$Gl &&
							s.fileOperationResult ===
								C.FileOperationResult.FILE_NOT_MODIFIED_SINCE
							? new m.NotModified(b, s.options?.mtime)
							: (p.debug(
									`loadLocalResource - Error using fileReader. requestUri=${c}`,
								),
								console.log(s),
								m.Failed);
					}
				}
				function u(c, n) {
					for (const g of n) if (a(g, c)) return h(c);
				}
				function a(c, n) {
					if (c.scheme !== n.scheme) return !1;
					let g = (0, w.$mc)(n.fsPath),
						p = (0, w.$mc)(c.fsPath + (c.fsPath.endsWith(w.sep) ? "" : w.sep));
					return (
						(0, t.$Ig)(c.fsPath) &&
							(0, t.$Ig)(n.fsPath) &&
							((p = p.toLowerCase()), (g = g.toLowerCase())),
						g.startsWith(p)
					);
				}
				function h(c) {
					return c.scheme === i.Schemas.vscodeRemote
						? E.URI.from({
								scheme: i.Schemas.vscodeRemote,
								authority: c.authority,
								path: "/vscode-resource",
								query: JSON.stringify({ requestResourcePath: c.path }),
							})
						: c;
				}
			},
		),
		