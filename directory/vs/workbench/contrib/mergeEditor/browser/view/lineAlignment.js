import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/assert.js';
import '../../../../../base/common/types.js';
import '../../../../../editor/common/core/position.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/core/textLength.js';
import '../model/mapping.js';
import '../model/rangeUtils.js';
define(
			de[3084],
			he([1, 0, 24, 229, 28, 48, 17, 458, 686, 1739]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*assert*/,
 w /*types*/,
 E /*position*/,
 C /*range*/,
 d /*textLength*/,
 m /*mapping*/,
 r /*rangeUtils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$PRc = u);
				function u(c) {
					const n = a(
							c.input1Diffs.flatMap((s) => s.rangeMappings),
							c.baseRange.toRange(),
							c.input1Range.toRange(),
						),
						g = a(
							c.input2Diffs.flatMap((s) => s.rangeMappings),
							c.baseRange.toRange(),
							c.input2Range.toRange(),
						),
						p = h(n, g);
					let o = [];
					o.push([
						c.input1Range.startLineNumber - 1,
						c.baseRange.startLineNumber - 1,
						c.input2Range.startLineNumber - 1,
					]);
					function f(s) {
						return s.every((l) => l !== void 0);
					}
					for (const s of p) {
						const l = [
								s.output1Pos?.lineNumber,
								s.inputPos.lineNumber,
								s.output2Pos?.lineNumber,
							],
							y = f(l);
						let $ = !0;
						if (y) {
							const v = !o.some(
								(S) => f(S) && S.some((I, T) => I !== void 0 && I === l[T]),
							);
							v &&
								(o = o.filter(
									(S) => !S.some((I, T) => I !== void 0 && I === l[T]),
								)),
								($ = v);
						} else
							$ = !o.some((S) => S.some((I, T) => I !== void 0 && I === l[T]));
						$
							? o.push(l)
							: s.length.isGreaterThan(new d.$tL(1, 0)) &&
								o.push([
									s.output1Pos ? s.output1Pos.lineNumber + 1 : void 0,
									s.inputPos.lineNumber + 1,
									s.output2Pos ? s.output2Pos.lineNumber + 1 : void 0,
								]);
					}
					const b = [
						c.input1Range.endLineNumberExclusive,
						c.baseRange.endLineNumberExclusive,
						c.input2Range.endLineNumberExclusive,
					];
					return (
						(o = o.filter((s) => s.every((l, y) => l !== b[y]))),
						o.push(b),
						(0, i.$nd)(
							() =>
								(0, i.$od)(o.map((s) => s[0]).filter(w.$tg), (s, l) => s < l) &&
								(0, i.$od)(
									o.map((s) => s[1]).filter(w.$tg),
									(s, l) => s <= l,
								) &&
								(0, i.$od)(o.map((s) => s[2]).filter(w.$tg), (s, l) => s < l) &&
								o.every((s) => s.filter(w.$tg).length >= 2),
						),
						o
					);
				}
				function a(c, n, g) {
					const p = [];
					let o = n.getStartPosition(),
						f = g.getStartPosition();
					for (const s of c) {
						const l = new m.$yZb(
							C.$iL.fromPositions(o, s.inputRange.getStartPosition()),
							C.$iL.fromPositions(f, s.outputRange.getStartPosition()),
						);
						(0, i.$nd)(() =>
							(0, r.$qZb)(l.inputRange).equals((0, r.$qZb)(l.outputRange)),
						),
							l.inputRange.isEmpty() || p.push(l),
							(o = s.inputRange.getEndPosition()),
							(f = s.outputRange.getEndPosition());
					}
					const b = new m.$yZb(
						C.$iL.fromPositions(o, n.getEndPosition()),
						C.$iL.fromPositions(f, g.getEndPosition()),
					);
					return (
						(0, i.$nd)(() =>
							(0, r.$qZb)(b.inputRange).equals((0, r.$qZb)(b.outputRange)),
						),
						b.inputRange.isEmpty() || p.push(b),
						p
					);
				}
				function h(c, n) {
					const g = [],
						p = [];
					for (const [b, s] of [
						[0, c],
						[1, n],
					])
						for (const l of s)
							p.push({
								input: b,
								start: !0,
								inputPos: l.inputRange.getStartPosition(),
								outputPos: l.outputRange.getStartPosition(),
							}),
								p.push({
									input: b,
									start: !1,
									inputPos: l.inputRange.getEndPosition(),
									outputPos: l.outputRange.getEndPosition(),
								});
					p.sort((0, t.$0b)((b) => b.inputPos, E.$hL.compare));
					const o = [void 0, void 0];
					let f;
					for (const b of p) {
						if (f && o.some((s) => !!s)) {
							const s = (0, r.$rZb)(f, b.inputPos);
							s.isZero() ||
								(g.push({
									inputPos: f,
									length: s,
									output1Pos: o[0],
									output2Pos: o[1],
								}),
								o[0] && (o[0] = (0, r.$sZb)(o[0], s)),
								o[1] && (o[1] = (0, r.$sZb)(o[1], s)));
						}
						(o[b.input] = b.start ? b.outputPos : void 0), (f = b.inputPos);
					}
					return g;
				}
			},
		)
