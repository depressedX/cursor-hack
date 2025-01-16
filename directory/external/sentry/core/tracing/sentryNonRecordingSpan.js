define(de[888], he([1, 0, 80, 301]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.SentryNonRecordingSpan = void 0);
			class w {
				constructor(C = {}) {
					(this._traceId = C.traceId || (0, t.uuid4)()),
						(this._spanId = C.spanId || (0, t.uuid4)().substring(16));
				}
				spanContext() {
					return {
						spanId: this._spanId,
						traceId: this._traceId,
						traceFlags: i.TRACE_FLAG_NONE,
					};
				}
				end(C) {}
				setAttribute(C, d) {
					return this;
				}
				setAttributes(C) {
					return this;
				}
				setStatus(C) {
					return this;
				}
				updateName(C) {
					return this;
				}
				isRecording() {
					return !1;
				}
				addEvent(C, d, m) {
					return this;
				}
				addLink(C) {
					return this;
				}
				addLinks(C) {
					return this;
				}
				recordException(C, d) {}
			}
			e.SentryNonRecordingSpan = w;
		}),
		