define(de[1593], he([1, 0, 7, 12]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$fhc = w),
				(t = mt(t));
			function w(E, C, d, m, r, u, a, h, c) {
				const n = t.$("button.fix-in-" + C),
					g = t.$fhb(n, t.$("span.text"));
				(g.innerText = E),
					(n.style.border = "none"),
					(n.style.borderRadius = "2px"),
					(n.style.cursor = "pointer"),
					(n.style.padding = "4px 8px"),
					(n.style.fontSize = "11px"),
					(n.style.display = "inline-flex"),
					(n.style.alignItems = "center"),
					(n.style.justifyContent = "center"),
					(n.style.userSelect = "none"),
					(n.style.width = "150px"),
					d
						? ((n.style.backgroundColor = "var(--vscode-button-background)"),
							(n.style.color = "var(--vscode-button-foreground)"))
						: ((n.style.backgroundColor =
								"var(--vscode-button-secondaryBackground)"),
							(n.style.color = "var(--vscode-button-secondaryForeground)")),
					(n.style.marginRight = C === "edit" ? "8px" : "0"),
					n.classList.add(`fix-in-${C}-button-hover`);
				const p = i.$m ? "Cmd" : "Ctrl";
				return (
					(n.title = `${p}+click to fix in new ${C === "edit" ? "composer" : "chat"}`),
					(n.onclick = (o) => {
						const f = !(o.ctrlKey || o.metaKey);
						u.publicLogCapture(
							`Submitted Fix In ${C === "edit" ? "Composer" : "Chat"}`,
						),
							r.trackEvent("hover_bar.submit_fix", { useCurrent: f, mode: C }),
							m.fixLinterErrorWithAI({
								errorMessage: a,
								editorUri: h,
								range: c,
								addToCurrent: f,
								forceMode: C,
							});
					}),
					n
				);
			}
		}),
		