import React, { useState } from 'react';

function ComparisonAnalysis() {
  const logs = ['Pain Log', 'Mood Log', 'Nutrition Log', 'Hydration Log'];
  const [selectedLog, setSelectedLog] = useState('');
  const [timePeriod, setTimePeriod] = useState('7d');
  const [graphType, setGraphType] = useState('bar');

  const handleLogChange = (e) => setSelectedLog(e.target.value);
  const handleTimePeriodChange = (e) => setTimePeriod(e.target.value);
  const handleGraphTypeChange = (e) => setGraphType(e.target.value);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Comparison Analysis</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="log">Choose a Log</label>
          <select
            id="log"
            value={selectedLog}
            onChange={handleLogChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select Log</option>
            {logs.map((log) => (
              <option key={log} value={log}>{log}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="timePeriod">Time Period</label>
          <select
            id="timePeriod"
            value={timePeriod}
            onChange={handleTimePeriodChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="graphType">Graph Type</label>
          <select
            id="graphType"
            value={graphType}
            onChange={handleGraphTypeChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="bar">Bar Graph</option>
            <option value="line">Line Graph</option>
          </select>
        </div>
      </form>
      <div className="mt-6 p-4 border border-gray-300 rounded text-center text-gray-500">
        {selectedLog ? (
          <p>Graph for {selectedLog} ({graphType}) over {timePeriod}</p>
        ) : (
          <p>Please select a log to display the graph.</p>
        )}
      </div>
    </div>
  );
}

export default ComparisonAnalysis;
