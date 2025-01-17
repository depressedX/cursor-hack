import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../ui/browser/dropdown/dropdown.js';
import '../../ui/browser/radio/radio.js';
import '../../ui/browser/scrollableDiv.js';
import '../../controlCommon/browser/solid.js';
define(
			de[4196],
			he([1, 0, 2, 2, 2, 13, 523, 3207, 135, 36]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Izc = h);
				const u = (0, t.template)("<pre><code>"),
					a = (0, t.template)(
						"<div><div><div>Hyper Mode</div></div><div><div>Hyper Model",
					);
				function h() {
					const c = (0, r.$odc)(),
						n = (0, E.createMemo)(
							() =>
								c.reactiveStorageService.applicationUserPersistentStorage
									.aiHyperModeEnabled,
						),
						g = (0, E.createMemo)(
							() =>
								c.reactiveStorageService.nonPersistentStorage.aiHyperModeData,
						),
						p = (0, E.createMemo)(() => {
							const f = g().hyperRegionsMap;
							try {
								return JSON.stringify(f, null, 2);
							} catch (b) {
								return (
									console.error("Failed to stringify hyperRegionsMap:", b), "{}"
								);
							}
						}),
						o = (0, E.createMemo)(() => {
							const f = c.aiSettingsService.getAvailableModelsReactive();
							return [
								{
									id: "ft:gpt-4-0613:anysphere::99Wnad5H",
									label: "ft:gpt-4-0613:anysphere::99Wnad5H",
								},
								{
									id: "ft:gpt-4-turbo-2024-04-09-alpha:anysphere::9HABVoWl",
									label: "ft:gpt-4-turbo-2024-04-09-alpha:anysphere::9HABVoWl",
								},
								{
									id: "ft:gpt-4-0613:anysphere::9HnbE7b9",
									label: "ft:gpt-4-0613:anysphere::9HnbE7b9",
								},
								{ id: "claude-3-haiku", label: "claude-3-haiku" },
								...f.map((b) => ({ id: b, label: b })),
							];
						});
					return (() => {
						const f = a(),
							b = f.firstChild,
							s = b.firstChild,
							l = b.nextSibling,
							y = l.firstChild;
						return (
							f.style.setProperty("padding", "16px"),
							f.style.setProperty("display", "flex"),
							f.style.setProperty("flex-direction", "column"),
							f.style.setProperty("gap", "8px"),
							f.style.setProperty("height", "100%"),
							b.style.setProperty("display", "flex"),
							b.style.setProperty("align-items", "center"),
							b.style.setProperty("justify-content", "space-between"),
							b.style.setProperty("gap", "8px"),
							(0, i.insert)(
								b,
								(0, w.createComponent)(d.$Hzc, {
									options: ["On", "Off"],
									get selected() {
										return n() ? "On" : "Off";
									},
									onChange: ($) => {},
								}),
								null,
							),
							l.style.setProperty("display", "flex"),
							l.style.setProperty("align-items", "center"),
							l.style.setProperty("justify-content", "space-between"),
							l.style.setProperty("gap", "8px"),
							(0, i.insert)(
								l,
								(0, w.createComponent)(C.$Kbc, {
									origLabel: "Select Hyper Model",
									get value() {
										return (
											c.reactiveStorageService.applicationUserPersistentStorage
												.aiHyperModeModel ?? "finetuned-gpt-4"
										);
									},
									get items() {
										return o();
									},
									onSelect: ($) => {},
								}),
								null,
							),
							(0, i.insert)(
								f,
								(0, w.createComponent)(m.$w0b, {
									scrollingDirection: "vertical",
									style: { height: "100%", width: "100%" },
									get children() {
										const $ = u(),
											v = $.firstChild;
										return (
											$.style.setProperty("white-space", "pre-wrap"),
											$.style.setProperty("word-wrap", "break-word"),
											(0, i.insert)(v, p),
											$
										);
									},
								}),
								null,
							),
							f
						);
					})();
				}
			},
		),
		