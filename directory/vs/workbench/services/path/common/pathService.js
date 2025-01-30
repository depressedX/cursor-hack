import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/extpath.js';
import '../../../../base/common/network.js';
import '../../../../base/common/path.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../environment/common/environmentService.js';
import '../../remote/common/remoteAgentService.js';
define(
			de[165],
			he([1, 0, 249, 23, 54, 12, 19, 9, 5, 349, 25, 78, 143]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extpath*/,
 i /*network*/,
 w /*path*/,
 E /*platform*/,
 C /*resources*/,
 d /*uri*/,
 m /*instantiation*/,
 r /*virtualWorkspace*/,
 u /*workspace*/,
 a /*environmentService*/,
 h /*remoteAgentService*/) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J8 = e.$I8 = void 0),
					(e.$I8 = (0, m.$Mi)("pathService"));
				let n = (c = class {
					constructor(p, o, f, b) {
						(this.d = p),
							(this.e = o),
							(this.f = f),
							(this.g = b),
							(this.a = (async () =>
								(await this.e.getEnvironment())?.os || E.OS)()),
							(this.b = (async () => {
								const s = await this.e.getEnvironment();
								return (this.c = s?.userHome ?? p);
							})());
					}
					hasValidBasename(p, o, f) {
						return typeof o == "string" || typeof o > "u"
							? this.a.then((b) => this.h(p, b, o))
							: this.h(p, o, f);
					}
					h(p, o, f) {
						return p.scheme === i.Schemas.file ||
							p.scheme === i.Schemas.vscodeRemote
							? (0, t.$Jg)(f ?? (0, C.$kh)(p), o === E.OperatingSystem.Windows)
							: !0;
					}
					get defaultUriScheme() {
						return c.findDefaultUriScheme(this.f, this.g);
					}
					static findDefaultUriScheme(p, o) {
						if (p.remoteAuthority) return i.Schemas.vscodeRemote;
						const f = (0, r.$F8)(o.getWorkspace());
						if (f) return f;
						const b = o.getWorkspace().folders[0];
						if (b) return b.uri.scheme;
						const s = o.getWorkspace().configuration;
						return s ? s.scheme : i.Schemas.file;
					}
					userHome(p) {
						return p?.preferLocal ? this.d : this.b;
					}
					get resolvedUserHome() {
						return this.c;
					}
					get path() {
						return this.a.then((p) =>
							p === E.OperatingSystem.Windows ? w.$kc : w.$lc,
						);
					}
					async fileURI(p) {
						let o = "";
						if (
							((await this.a) === E.OperatingSystem.Windows &&
								(p = p.replace(/\\/g, "/")),
							p[0] === "/" && p[1] === "/")
						) {
							const b = p.indexOf("/", 2);
							b === -1
								? ((o = p.substring(2)), (p = "/"))
								: ((o = p.substring(2, b)), (p = p.substring(b) || "/"));
						}
						return d.URI.from({
							scheme: i.Schemas.file,
							authority: o,
							path: p,
							query: "",
							fragment: "",
						});
					}
				});
				(e.$J8 = n),
					(e.$J8 = n = c = Ne([j(1, h.$$m), j(2, a.$r8), j(3, u.$Vi)], n));
			},
		),
		