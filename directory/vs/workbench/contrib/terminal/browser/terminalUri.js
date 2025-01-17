import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import './terminal.js';
define(de[690], he([1, 0, 23, 9, 107]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$TUc = E),
				(e.$UUc = C),
				(e.$VUc = d),
				(e.$WUc = m);
			function E(r) {
				const [, u, a] = r.path.split("/");
				if (!u || !Number.parseInt(a))
					throw new Error(`Could not parse terminal uri for resource ${r}`);
				return { workspaceId: u, instanceId: Number.parseInt(a) };
			}
			function C(r, u, a) {
				return i.URI.from({
					scheme: t.Schemas.vscodeTerminal,
					path: `/${r}/${u}`,
					fragment: a || void 0,
				});
			}
			function d(r) {
				const u = r.dataTransfer?.getData(w.TerminalDataTransfers.Terminals);
				if (u) {
					const a = JSON.parse(u),
						h = [];
					for (const c of a) h.push(i.URI.parse(c));
					return h.length === 0 ? void 0 : h;
				}
			}
			function m(r, u) {
				if (u) {
					for (const a of r) if (a.resource.path === u.path) return a;
				}
			}
		}),
		