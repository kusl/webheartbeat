# Perf matters


Start a new run
Wed Oct 13 2021 14:03:03 GMT+0000 (Coordinated Universal Time)




{
  error: Error: Failed to launch the browser process!
  Inconsistency detected by ld.so: ../elf/dl-tls.c: 481: _dl_allocate_tls_init: Assertion `listp->slotinfo[cnt].gen <= GL(dl_tls_generation)' failed!
  
  
  TROUBLESHOOTING: https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md
  
      at onClose (/home/runner/work/webheartbeat/webheartbeat/node_modules/puppeteer/lib/cjs/puppeteer/node/BrowserRunner.js:193:20)
      at Interface.<anonymous> (/home/runner/work/webheartbeat/webheartbeat/node_modules/puppeteer/lib/cjs/puppeteer/node/BrowserRunner.js:183:68)
      at Interface.emit (events.js:412:35)
      at Interface.close (readline.js:530:8)
      at Socket.onend (readline.js:254:10)
      at Socket.emit (events.js:412:35)
      at endReadableNT (internal/streams/readable.js:1334:12)
      at processTicksAndRejections (internal/process/task_queues.js:82:21)
}




