import '../../../require.js';
import '../../../exports.js';
import './breadcrumbs.js';
import './currentScopes.js';
import './exports.js';
define(de[2126], he([1, 0, 1442, 234, 734]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getCurrentHub = void 0),
				(e.getCurrentHubShim = E);
			function E() {
				return {
					bindClient(d) {
						(0, i.getCurrentScope)().setClient(d);
					},
					withScope: i.withScope,
					getClient: () => (0, i.getClient)(),
					getScope: i.getCurrentScope,
					getIsolationScope: i.getIsolationScope,
					captureException: (d, m) =>
						(0, i.getCurrentScope)().captureException(d, m),
					captureMessage: (d, m, r) =>
						(0, i.getCurrentScope)().captureMessage(d, m, r),
					captureEvent: w.captureEvent,
					addBreadcrumb: t.addBreadcrumb,
					setUser: w.setUser,
					setTags: w.setTags,
					setTag: w.setTag,
					setExtra: w.setExtra,
					setExtras: w.setExtras,
					setContext: w.setContext,
					getIntegration(d) {
						const m = (0, i.getClient)();
						return (m && m.getIntegrationByName(d.id)) || null;
					},
					startSession: w.startSession,
					endSession: w.endSession,
					captureSession(d) {
						if (d) return (0, w.endSession)();
						C();
					},
				};
			}
			e.getCurrentHub = E;
			function C() {
				const d = (0, i.getCurrentScope)(),
					m = (0, i.getClient)(),
					r = d.getSession();
				m && r && m.captureSession(r);
			}
		}),
		