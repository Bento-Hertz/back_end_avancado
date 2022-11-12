const os = require('os')

const { freemem, totalmem } = os

setInterval(() => {
   const total = parseInt(totalmem()/1024/1024)
   const freeMem = parseInt(freemem()/1024/1024)
   const usage = total - freeMem
   const percents = parseInt((usage/total) * 100)
   
   const stats = {
      total: `${total} MB`,
      freeMem: `${freeMem} MB`,
      precents: `${percents}% em uso`
   }
   
   console.clear()
   console.table(stats)
}, 1000)


