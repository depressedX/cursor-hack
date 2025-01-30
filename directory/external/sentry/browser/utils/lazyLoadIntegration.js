import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../helpers.js';
define(de[2144], he([1, 0, 144, 386]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*helpers*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.lazyLoadIntegration = C);
			const w = {
					replayIntegration: "replay",
					replayCanvasIntegration: "replay-canvas",
					feedbackIntegration: "feedback",
					feedbackModalIntegration: "feedback-modal",
					feedbackScreenshotIntegration: "feedback-screenshot",
					captureConsoleIntegration: "captureconsole",
					contextLinesIntegration: "contextlines",
					linkedErrorsIntegration: "linkederrors",
					debugIntegration: "debug",
					dedupeIntegration: "dedupe",
					extraErrorDataIntegration: "extraerrordata",
					httpClientIntegration: "httpclient",
					reportingObserverIntegration: "reportingobserver",
					rewriteFramesIntegration: "rewriteframes",
					sessionTimingIntegration: "sessiontiming",
					browserProfilingIntegration: "browserprofiling",
				},
				E = i.WINDOW;
			async function C(m, r) {
				const u = w[m],
					a = (E.Sentry = E.Sentry || {});
				if (!u) throw new Error(`Cannot lazy load integration: ${m}`);
				const h = a[m];
				if (typeof h == "function" && !("_isShim" in h)) return h;
				const c = d(u),
					n = i.WINDOW.document.createElement("script");
				(n.src = c),
					(n.crossOrigin = "anonymous"),
					(n.referrerPolicy = "origin"),
					r && n.setAttribute("nonce", r);
				const g = new Promise((b, s) => {
						n.addEventListener("load", () => b()),
							n.addEventListener("error", s);
					}),
					p = i.WINDOW.document.currentScript,
					o =
						i.WINDOW.document.body ||
						i.WINDOW.document.head ||
						(p && p.parentElement);
				if (o) o.appendChild(n);
				else
					throw new Error(
						`Could not find parent element to insert lazy-loaded ${m} script`,
					);
				try {
					await g;
				} catch {
					throw new Error(`Error when loading integration: ${m}`);
				}
				const f = a[m];
				if (typeof f != "function")
					throw new Error(`Could not load integration: ${m}`);
				return f;
			}
			function d(m) {
				const r = (0, t.getClient)(),
					u = r && r.getOptions(),
					a = (u && u.cdnBaseUrl) || "https://browser.sentry-cdn.com";
				return new URL(`/${t.SDK_VERSION}/${m}.min.js`, a).toString();
			}
		}),
		