/**
 * 使用RequestAnimationFrame实现setTimeout和setInterval
 * 代码来源：https://zhuanlan.zhihu.com/p/34868095
 */
interface TimerIdMap {
  timeout: object;
  interval: object;
}

export default class RAF {
  private timerIdMap: TimerIdMap;

  public constructor() {
    this.timerIdMap = {
      timeout: {},
      interval: {},
    };
  }

  private run(type = 'interval', cb: () => void, interval = 16.7) {
    const { now } = Date;
    let startTime = now();
    let endTime = startTime;
    const timerSymbol = Symbol();
    const loop = () => {
      this.setIdMap(timerSymbol, type, loop);
      endTime = now();
      if (endTime - startTime >= interval) {
        if (type === 'interval') {
          startTime = now();
          endTime = startTime;
        }
        cb();
        type === 'timeout' && this.clearTimeout(timerSymbol);
      }
    };
    this.setIdMap(timerSymbol, type, loop);
    return timerSymbol;
  }

  private setIdMap(
    timerSymbol: symbol,
    type: string,
    loop: (time: number) => void,
  ) {
    const id = requestAnimationFrame(loop);
    this.timerIdMap[type][timerSymbol] = id;
  }

  public setTimeout(cb: () => void, interval: number) {
    return this.run('timeout', cb, interval);
  }

  public clearTimeout(timer: symbol) {
    cancelAnimationFrame(this.timerIdMap.timeout[timer]);
  }

  public setInterval(cb: () => void, interval: number) {
    return this.run('interval', cb, interval);
  }

  public clearInterval(timer: symbol) {
    cancelAnimationFrame(this.timerIdMap.interval[timer]);
  }
}
