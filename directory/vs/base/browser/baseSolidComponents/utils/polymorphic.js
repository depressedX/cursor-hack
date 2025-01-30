import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import './utils.js';
import './solid-primitives/props/props.js';
import '../../../../../external/solid/solid.js';
import '../../../../../external/solid/web.js';
define(
			de[494],
			he([1, 0, 2, 2, 369, 1493, 13, 2]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*utils*/,
 E /*props*/,
 C /*solid*/,
 d /*web*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5kb = m),
					(e.As = u);
				function m(c) {
					const [n, g] = (0, C.splitProps)(c, ["asChild", "as", "children"]);
					if (!n.asChild)
						return (0, t.createComponent)(
							d.Dynamic,
							(0, i.mergeProps)(
								{
									get component() {
										return n.as;
									},
								},
								g,
								{
									get children() {
										return n.children;
									},
								},
							),
						);
					const p = (0, C.children)(() => n.children);
					if (a(p())) {
						const o = h(g, p()?.props ?? {});
						return (0, t.createComponent)(d.Dynamic, o);
					}
					if ((0, w.$yjb)(p())) {
						const o = p().find(a);
						if (o) {
							const f = () =>
									(0, t.createComponent)(C.For, {
										get each() {
											return p();
										},
										children: (s) =>
											(0, t.createComponent)(C.Show, {
												when: s === o,
												fallback: s,
												get children() {
													return o.props.children;
												},
											}),
									}),
								b = h(g, o?.props ?? {});
							return (0, t.createComponent)(
								d.Dynamic,
								(0, i.mergeProps)(b, { children: f }),
							);
						}
					}
					throw new Error(
						"[kobalte]: Component is expected to render `asChild` but no children `As` component was found.",
					);
				}
				const r = Symbol("$$KobalteAsComponent");
				function u(c) {
					return { [r]: !0, props: c };
				}
				function a(c) {
					return c?.[r] === !0;
				}
				function h(c, n) {
					return (0, E.$4kb)([c, n], { reverseEventHandlers: !0 });
				}
			},
		),
		