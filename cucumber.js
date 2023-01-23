module.exports = { 
    default: {
        publishQuiet : true,
        parallel: 1,
        "format": [
            "rerun:reports/rerun.txt",
            "html:reports/cucumber-report.html"
          ],
        "dryRun": false,
      },
}