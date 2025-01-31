import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './currentScopes.js';
import './debug-build.js';
define(de[316], he([1, 0, 80, 234, 263]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*currentScopes*/,
 w /*debug-build*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.installedIntegrations = void 0),
				(e.getIntegrationsToSetup = C),
				(e.setupIntegrations = d),
				(e.afterSetupIntegrations = m),
				(e.setupIntegration = r),
				(e.addIntegration = u),
				(e.defineIntegration = a),
				(e.installedIntegrations = []);
			function E(h) {
				const c = {};
				return (
					h.forEach((n) => {
						const { name: g } = n,
							p = c[g];
						(p && !p.isDefaultInstance && n.isDefaultInstance) || (c[g] = n);
					}),
					Object.values(c)
				);
			}
			function C(h) {
				const c = h.defaultIntegrations || [],
					n = h.integrations;
				c.forEach((f) => {
					f.isDefaultInstance = !0;
				});
				let g;
				Array.isArray(n)
					? (g = [...c, ...n])
					: typeof n == "function"
						? (g = (0, t.arrayify)(n(c)))
						: (g = c);
				const p = E(g),
					o = p.findIndex((f) => f.name === "Debug");
				if (o > -1) {
					const [f] = p.splice(o, 1);
					p.push(f);
				}
				return p;
			}
			function d(h, c) {
				const n = {};
				return (
					c.forEach((g) => {
						g && r(h, g, n);
					}),
					n
				);
			}
			function m(h, c) {
				for (const n of c) n && n.afterAllSetup && n.afterAllSetup(h);
			}
			function r(h, c, n) {
				if (n[c.name]) {
					w.DEBUG_BUILD &&
						t.logger.log(
							`Integration skipped because it was already installed: ${c.name}`,
						);
					return;
				}
				if (
					((n[c.name] = c),
					e.installedIntegrations.indexOf(c.name) === -1 &&
						typeof c.setupOnce == "function" &&
						(c.setupOnce(), e.installedIntegrations.push(c.name)),
					c.setup && typeof c.setup == "function" && c.setup(h),
					typeof c.preprocessEvent == "function")
				) {
					const g = c.preprocessEvent.bind(c);
					h.on("preprocessEvent", (p, o) => g(p, o, h));
				}
				if (typeof c.processEvent == "function") {
					const g = c.processEvent.bind(c),
						p = Object.assign((o, f) => g(o, f, h), { id: c.name });
					h.addEventProcessor(p);
				}
				w.DEBUG_BUILD && t.logger.log(`Integration installed: ${c.name}`);
			}
			function u(h) {
				const c = (0, i.getClient)();
				if (!c) {
					w.DEBUG_BUILD &&
						t.logger.warn(
							`Cannot add integration "${h.name}" because no SDK Client is available.`,
						);
					return;
				}
				c.addIntegration(h);
			}
			function a(h) {
				return h;
			}
		})
