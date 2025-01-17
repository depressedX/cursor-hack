import '../../../require.js';
import '../../../exports.js';
import './window.js';
import '../common/event.js';
define(de[139], he([1, 0, 75, 6]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ufb =
					e.$Tfb =
					e.$Sfb =
					e.$Rfb =
					e.$Qfb =
					e.$Pfb =
					e.$Ofb =
					e.$Nfb =
					e.$Ifb =
						void 0),
				(e.$Ffb = E),
				(e.$Gfb = C),
				(e.$Hfb = d),
				(e.$Jfb = m),
				(e.$Kfb = r),
				(e.$Lfb = u),
				(e.$Mfb = a),
				(e.$Vfb = n),
				(e.$Wfb = g),
				(e.$Xfb = p);
			class w {
				constructor() {
					(this.a = new Map()),
						(this.b = new i.$re()),
						(this.onDidChangeZoomLevel = this.b.event),
						(this.c = new Map()),
						(this.d = new i.$re()),
						(this.onDidChangeFullscreen = this.d.event),
						(this.e = new Map());
				}
				static {
					this.INSTANCE = new w();
				}
				getZoomLevel(f) {
					return this.a.get(this.f(f)) ?? 0;
				}
				setZoomLevel(f, b) {
					if (this.getZoomLevel(b) === f) return;
					const s = this.f(b);
					this.a.set(s, f), this.b.fire(s);
				}
				getZoomFactor(f) {
					return this.c.get(this.f(f)) ?? 1;
				}
				setZoomFactor(f, b) {
					this.c.set(this.f(b), f);
				}
				setFullscreen(f, b) {
					if (this.isFullscreen(b) === f) return;
					const s = this.f(b);
					this.e.set(s, f), this.d.fire(s);
				}
				isFullscreen(f) {
					return !!this.e.get(this.f(f));
				}
				f(f) {
					return f.vscodeWindowId;
				}
			}
			function E(o, f, b) {
				typeof f == "string" && (f = o.matchMedia(f)),
					f.addEventListener("change", b);
			}
			function C(o, f) {
				w.INSTANCE.setZoomLevel(o, f);
			}
			function d(o) {
				return w.INSTANCE.getZoomLevel(o);
			}
			e.$Ifb = w.INSTANCE.onDidChangeZoomLevel;
			function m(o) {
				return w.INSTANCE.getZoomFactor(o);
			}
			function r(o, f) {
				w.INSTANCE.setZoomFactor(o, f);
			}
			function u(o, f) {
				w.INSTANCE.setFullscreen(o, f);
			}
			function a(o) {
				return w.INSTANCE.isFullscreen(o);
			}
			e.$Nfb = w.INSTANCE.onDidChangeFullscreen;
			const h = navigator.userAgent;
			(e.$Ofb = h.indexOf("Firefox") >= 0),
				(e.$Pfb = h.indexOf("AppleWebKit") >= 0),
				(e.$Qfb = h.indexOf("Chrome") >= 0),
				(e.$Rfb = !e.$Qfb && h.indexOf("Safari") >= 0),
				(e.$Sfb = !e.$Qfb && !e.$Rfb && e.$Pfb),
				(e.$Tfb = h.indexOf("Electron/") >= 0),
				(e.$Ufb = h.indexOf("Android") >= 0);
			let c = !1;
			if (typeof t.$Bfb.matchMedia == "function") {
				const o = t.$Bfb.matchMedia(
						"(display-mode: standalone) or (display-mode: window-controls-overlay)",
					),
					f = t.$Bfb.matchMedia("(display-mode: fullscreen)");
				(c = o.matches),
					E(t.$Bfb, o, ({ matches: b }) => {
						(c && f.matches) || (c = b);
					});
			}
			function n() {
				return c;
			}
			function g() {
				return navigator?.windowControlsOverlay?.visible;
			}
			function p(o) {
				return o.navigator?.windowControlsOverlay?.getTitlebarAreaRect();
			}
		}),
		