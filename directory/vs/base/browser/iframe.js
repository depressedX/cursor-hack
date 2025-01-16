define(de[1126], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Zfb = void 0),
				(e.$1fb = E);
			const t = new WeakMap();
			function i(d) {
				if (!d.parent || d.parent === d) return null;
				try {
					const m = d.location,
						r = d.parent.location;
					if (
						m.origin !== "null" &&
						r.origin !== "null" &&
						m.origin !== r.origin
					)
						return null;
				} catch {
					return null;
				}
				return d.parent;
			}
			class w {
				static a(m) {
					let r = t.get(m);
					if (!r) {
						(r = []), t.set(m, r);
						let u = m,
							a;
						do
							(a = i(u)),
								a
									? r.push({
											window: new WeakRef(u),
											iframeElement: u.frameElement || null,
										})
									: r.push({ window: new WeakRef(u), iframeElement: null }),
								(u = a);
						while (u);
					}
					return r.slice(0);
				}
				static getPositionOfChildWindowRelativeToAncestorWindow(m, r) {
					if (!r || m === r) return { top: 0, left: 0 };
					let u = 0,
						a = 0;
					const h = this.a(m);
					for (const c of h) {
						const n = c.window.deref();
						if (
							((u += n?.scrollY ?? 0),
							(a += n?.scrollX ?? 0),
							n === r || !c.iframeElement)
						)
							break;
						const g = c.iframeElement.getBoundingClientRect();
						(u += g.top), (a += g.left);
					}
					return { top: u, left: a };
				}
			}
			e.$Zfb = w;
			async function E(d, m) {
				if (!crypto.subtle)
					throw new Error(
						"'crypto.subtle' is not available so webviews will not work. This is likely because the editor is not running in a secure context (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).",
					);
				const r = JSON.stringify({ parentOrigin: d, salt: m }),
					a = new TextEncoder().encode(r),
					h = await crypto.subtle.digest("sha-256", a);
				return C(h);
			}
			function C(d) {
				const r = Array.from(new Uint8Array(d))
					.map((u) => u.toString(16).padStart(2, "0"))
					.join("");
				return BigInt(`0x${r}`).toString(32).padStart(52, "0");
			}
		}),
		