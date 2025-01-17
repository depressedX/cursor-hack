import '../../../require.js';
import '../../../exports.js';
define(de[1127], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.inputLatency = void 0);
			var t;
			(function (i) {
				const w = { total: 0, min: Number.MAX_VALUE, max: 0 },
					E = { ...w },
					C = { ...w },
					d = { ...w };
				let m = 0,
					r;
				(function (T) {
					(T[(T.Before = 0)] = "Before"),
						(T[(T.InProgress = 1)] = "InProgress"),
						(T[(T.Finished = 2)] = "Finished");
				})(r || (r = {}));
				const u = { keydown: r.Before, input: r.Before, render: r.Before };
				function a() {
					l(),
						performance.mark("inputlatency/start"),
						performance.mark("keydown/start"),
						(u.keydown = r.InProgress),
						queueMicrotask(h);
				}
				i.onKeyDown = a;
				function h() {
					u.keydown === r.InProgress &&
						(performance.mark("keydown/end"), (u.keydown = r.Finished));
				}
				function c() {
					performance.mark("input/start"), (u.input = r.InProgress), s();
				}
				i.onBeforeInput = c;
				function n() {
					u.input === r.Before && c(), queueMicrotask(g);
				}
				i.onInput = n;
				function g() {
					u.input === r.InProgress &&
						(performance.mark("input/end"), (u.input = r.Finished));
				}
				function p() {
					l();
				}
				i.onKeyUp = p;
				function o() {
					l();
				}
				i.onSelectionChange = o;
				function f() {
					u.keydown === r.Finished &&
						u.input === r.Finished &&
						u.render === r.Before &&
						(performance.mark("render/start"),
						(u.render = r.InProgress),
						queueMicrotask(b),
						s());
				}
				i.onRenderStart = f;
				function b() {
					u.render === r.InProgress &&
						(performance.mark("render/end"), (u.render = r.Finished));
				}
				function s() {
					setTimeout(l);
				}
				function l() {
					u.keydown === r.Finished &&
						u.input === r.Finished &&
						u.render === r.Finished &&
						(performance.mark("inputlatency/end"),
						performance.measure("keydown", "keydown/start", "keydown/end"),
						performance.measure("input", "input/start", "input/end"),
						performance.measure("render", "render/start", "render/end"),
						performance.measure(
							"inputlatency",
							"inputlatency/start",
							"inputlatency/end",
						),
						y("keydown", w),
						y("input", E),
						y("render", C),
						y("inputlatency", d),
						m++,
						$());
				}
				function y(T, P) {
					const k = performance.getEntriesByName(T)[0].duration;
					(P.total += k),
						(P.min = Math.min(P.min, k)),
						(P.max = Math.max(P.max, k));
				}
				function $() {
					performance.clearMarks("keydown/start"),
						performance.clearMarks("keydown/end"),
						performance.clearMarks("input/start"),
						performance.clearMarks("input/end"),
						performance.clearMarks("render/start"),
						performance.clearMarks("render/end"),
						performance.clearMarks("inputlatency/start"),
						performance.clearMarks("inputlatency/end"),
						performance.clearMeasures("keydown"),
						performance.clearMeasures("input"),
						performance.clearMeasures("render"),
						performance.clearMeasures("inputlatency"),
						(u.keydown = r.Before),
						(u.input = r.Before),
						(u.render = r.Before);
				}
				function v() {
					if (m === 0) return;
					const T = {
						keydown: S(w),
						input: S(E),
						render: S(C),
						total: S(d),
						sampleCount: m,
					};
					return I(w), I(E), I(C), I(d), (m = 0), T;
				}
				i.getAndClearMeasurements = v;
				function S(T) {
					return { average: T.total / m, max: T.max, min: T.min };
				}
				function I(T) {
					(T.total = 0), (T.min = Number.MAX_VALUE), (T.max = 0);
				}
			})(t || (e.inputLatency = t = {}));
		}),
		