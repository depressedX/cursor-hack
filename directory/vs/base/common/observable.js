import '../../../require.js';
import '../../../exports.js';
import './observableInternal/base.js';
import './observableInternal/derived.js';
import './observableInternal/autorun.js';
import './observableInternal/utils.js';
import './observableInternal/promise.js';
import './observableInternal/api.js';
import './observableInternal/logging.js';
define(
			de[77],
			he([1, 0, 407, 319, 1133, 457, 1503, 2221, 742]),
			function (ce /*require*/,
 e /*exports*/,
 t /*base*/,
 i /*derived*/,
 w /*autorun*/,
 E /*utils*/,
 C /*promise*/,
 d /*api*/,
 m /*logging*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.observableValueOpts =
						e.derivedWithCancellationToken =
						e.waitForState =
						e.PromiseResult =
						e.ObservablePromise =
						e.ObservableLazyPromise =
						e.ObservableLazy =
						e.wasEventTriggeredRecently =
						e.observableSignalFromEvent =
						e.observableSignal =
						e.observableFromPromise =
						e.observableFromEvent =
						e.recomputeInitiallyAndOnChange =
						e.keepObserved =
						e.derivedObservableWithWritableCache =
						e.derivedObservableWithCache =
						e.debouncedObservable =
						e.constObservable =
						e.autorunWithStoreHandleChanges =
						e.autorunOpts =
						e.autorunWithStore =
						e.autorunHandleChanges =
						e.autorunDelta =
						e.autorun =
						e.derivedWithStore =
						e.derivedHandleChanges =
						e.derivedOpts =
						e.derived =
						e.subtransaction =
						e.transaction =
						e.disposableObservableValue =
						e.observableValue =
							void 0),
					Object.defineProperty(e, "observableValue", {
						enumerable: !0,
						get: function () {
							return t.$_d;
						},
					}),
					Object.defineProperty(e, "disposableObservableValue", {
						enumerable: !0,
						get: function () {
							return t.$be;
						},
					}),
					Object.defineProperty(e, "transaction", {
						enumerable: !0,
						get: function () {
							return t.$7d;
						},
					}),
					Object.defineProperty(e, "subtransaction", {
						enumerable: !0,
						get: function () {
							return t.$0d;
						},
					}),
					Object.defineProperty(e, "derived", {
						enumerable: !0,
						get: function () {
							return i.$Td;
						},
					}),
					Object.defineProperty(e, "derivedOpts", {
						enumerable: !0,
						get: function () {
							return i.$Vd;
						},
					}),
					Object.defineProperty(e, "derivedHandleChanges", {
						enumerable: !0,
						get: function () {
							return i.$Wd;
						},
					}),
					Object.defineProperty(e, "derivedWithStore", {
						enumerable: !0,
						get: function () {
							return i.$Xd;
						},
					}),
					Object.defineProperty(e, "autorun", {
						enumerable: !0,
						get: function () {
							return w.$pd;
						},
					}),
					Object.defineProperty(e, "autorunDelta", {
						enumerable: !0,
						get: function () {
							return w.$ud;
						},
					}),
					Object.defineProperty(e, "autorunHandleChanges", {
						enumerable: !0,
						get: function () {
							return w.$rd;
						},
					}),
					Object.defineProperty(e, "autorunWithStore", {
						enumerable: !0,
						get: function () {
							return w.$td;
						},
					}),
					Object.defineProperty(e, "autorunOpts", {
						enumerable: !0,
						get: function () {
							return w.$qd;
						},
					}),
					Object.defineProperty(e, "autorunWithStoreHandleChanges", {
						enumerable: !0,
						get: function () {
							return w.$sd;
						},
					}),
					Object.defineProperty(e, "constObservable", {
						enumerable: !0,
						get: function () {
							return E.$wd;
						},
					}),
					Object.defineProperty(e, "debouncedObservable", {
						enumerable: !0,
						get: function () {
							return E.$Dd;
						},
					}),
					Object.defineProperty(e, "derivedObservableWithCache", {
						enumerable: !0,
						get: function () {
							return E.$Jd;
						},
					}),
					Object.defineProperty(e, "derivedObservableWithWritableCache", {
						enumerable: !0,
						get: function () {
							return E.$Kd;
						},
					}),
					Object.defineProperty(e, "keepObserved", {
						enumerable: !0,
						get: function () {
							return E.$Gd;
						},
					}),
					Object.defineProperty(e, "recomputeInitiallyAndOnChange", {
						enumerable: !0,
						get: function () {
							return E.$Hd;
						},
					}),
					Object.defineProperty(e, "observableFromEvent", {
						enumerable: !0,
						get: function () {
							return E.$yd;
						},
					}),
					Object.defineProperty(e, "observableFromPromise", {
						enumerable: !0,
						get: function () {
							return E.$xd;
						},
					}),
					Object.defineProperty(e, "observableSignal", {
						enumerable: !0,
						get: function () {
							return E.$Cd;
						},
					}),
					Object.defineProperty(e, "observableSignalFromEvent", {
						enumerable: !0,
						get: function () {
							return E.$Bd;
						},
					}),
					Object.defineProperty(e, "wasEventTriggeredRecently", {
						enumerable: !0,
						get: function () {
							return E.$Fd;
						},
					}),
					Object.defineProperty(e, "ObservableLazy", {
						enumerable: !0,
						get: function () {
							return C.$de;
						},
					}),
					Object.defineProperty(e, "ObservableLazyPromise", {
						enumerable: !0,
						get: function () {
							return C.$ge;
						},
					}),
					Object.defineProperty(e, "ObservablePromise", {
						enumerable: !0,
						get: function () {
							return C.$ee;
						},
					}),
					Object.defineProperty(e, "PromiseResult", {
						enumerable: !0,
						get: function () {
							return C.$fe;
						},
					}),
					Object.defineProperty(e, "waitForState", {
						enumerable: !0,
						get: function () {
							return C.$he;
						},
					}),
					Object.defineProperty(e, "derivedWithCancellationToken", {
						enumerable: !0,
						get: function () {
							return C.$ie;
						},
					}),
					Object.defineProperty(e, "observableValueOpts", {
						enumerable: !0,
						get: function () {
							return d.$ke;
						},
					}),
					!1 && (0, m.$Qd)(new m.$Sd());
			},
		)
