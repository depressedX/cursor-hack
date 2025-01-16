define(de[3151], he([1, 0, 1762]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ngd = void 0);
			class i extends t.$eUc {
				constructor(E, C, d) {
					super(E, C), (this.q = d);
				}
				start() {
					return this.q.start(this.id);
				}
				detach(E) {
					return this.q.detachFromProcess(this.id, E);
				}
				shutdown(E) {
					this.q.shutdown(this.id, E);
				}
				async processBinary(E) {
					if (!this.c) return this.q.processBinary(this.id, E);
				}
				input(E) {
					this.c || this.q.input(this.id, E);
				}
				resize(E, C) {
					this.c ||
						(this.b.cols === E && this.b.rows === C) ||
						((this.b.cols = E),
						(this.b.rows = C),
						this.q.resize(this.id, E, C));
				}
				async clearBuffer() {
					this.q.clearBuffer?.(this.id);
				}
				freePortKillProcess(E) {
					if (!this.q.freePortKillProcess)
						throw new Error(
							"freePortKillProcess does not exist on the local pty service",
						);
					return this.q.freePortKillProcess(E);
				}
				async refreshProperty(E) {
					return this.q.refreshProperty(this.id, E);
				}
				async updateProperty(E, C) {
					return this.q.updateProperty(this.id, E, C);
				}
				acknowledgeDataEvent(E) {
					this.c || this.q.acknowledgeDataEvent(this.id, E);
				}
				setUnicodeVersion(E) {
					return this.q.setUnicodeVersion(this.id, E);
				}
				handleOrphanQuestion() {
					this.q.orphanQuestionReply(this.id);
				}
			}
			e.$ngd = i;
		}),
		