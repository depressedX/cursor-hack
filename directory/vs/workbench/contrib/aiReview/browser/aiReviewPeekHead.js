import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import './aiReviewResolveButton.js';
import './constants.js';
import '../../controlCommon/browser/solid.js';
define(
			de[4135],
			he([1, 0, 2, 2, 2, 2, 2, 13, 4134, 2996, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*solid*/,
 m /*aiReviewResolveButton*/,
 r /*constants*/,
 u /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$wed = p);
				const a = (0, t.template)("<div><div>"),
					h = (0, t.template)('<div class="ai-review-peek-view-severity-dot">'),
					c = (0, t.template)(
						'<div class="ai-review-peek-view-severity-title">',
					),
					n = (0, t.template)('<div class="ai-review-peek-view-sub-title">'),
					g = (0, t.template)('<div class="ai-review-peek-view-lines">');
				function p(o) {
					const f = (0, u.$odc)(),
						b = (0, d.createMemo)(() =>
							f.aiReviewService.getReviewChunkById(o.reviewChunkId),
						),
						s = (0, d.createMemo)(
							() => b()?.threads.find(($) => $.id === o.threadId) ?? null,
						),
						l = (0, d.createMemo)(() => s()?.bug.severity),
						y = (0, d.createMemo)(
							(0, d.on)(l, ($) => ($ === void 0 ? null : r.$xzc[$])),
						);
					return (() => {
						const $ = a(),
							v = $.firstChild;
						return (
							$.style.setProperty("display", "flex"),
							$.style.setProperty("gap", "6px"),
							$.style.setProperty("align-items", "center"),
							$.style.setProperty("padding", "0px 8px"),
							$.style.setProperty("height", "100%"),
							(0, E.insert)(
								$,
								(0, C.createComponent)(d.Show, {
									get when() {
										return y();
									},
									children: (S) => [
										(() => {
											const I = h();
											return (
												(0, w.effect)(() =>
													S().backgroundColor != null
														? I.style.setProperty(
																"background-color",
																S().backgroundColor,
															)
														: I.style.removeProperty("background-color"),
												),
												I
											);
										})(),
										(() => {
											const I = c();
											return (0, E.insert)(I, () => S().label), I;
										})(),
									],
								}),
								v,
							),
							(0, E.insert)(
								$,
								(0, C.createComponent)(d.Show, {
									get when() {
										return s()?.bug;
									},
									children: (S) => [
										(() => {
											const I = n();
											return (0, E.insert)(I, () => S().tldr), I;
										})(),
										(() => {
											const I = g();
											return (
												(0, E.insert)(
													I,
													(() => {
														const T = (0, i.memo)(
															() =>
																S().startLine === S().endLine || !S().endLine,
														);
														return () =>
															T()
																? `Line ${S().startLine}`
																: `Lines ${S().startLine} - ${S().endLine}`;
													})(),
												),
												I
											);
										})(),
									],
								}),
								v,
							),
							v.style.setProperty("margin-left", "auto"),
							v.style.setProperty("display", "flex"),
							v.style.setProperty("gap", "4px"),
							(0, E.insert)(
								v,
								(0, C.createComponent)(m.$wzc, {
									showAnyways: !0,
									get chunk() {
										return b();
									},
									get chunkId() {
										return o.reviewChunkId;
									},
									get thread() {
										return s();
									},
									get onClick() {
										return o.closePeekView;
									},
								}),
							),
							(0, w.effect)(() =>
								(s()?.isResolved ? 0.5 : 1) != null
									? $.style.setProperty("opacity", s()?.isResolved ? 0.5 : 1)
									: $.style.removeProperty("opacity"),
							),
							$
						);
					})();
				}
			},
		)
