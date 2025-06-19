import React from "react";

const AboutMe = () => {
  return (
    <div className="space-y-4">
      <div className="relative text-center">
        <h3 className="text-xl font-bold text-theme-purple">Evelyn Wu</h3>
        <h4 className="text-lg text-gray-600">
          ✨ Statistics and Machine Learning + AI @ CMU{" "}
        </h4>
      </div>

      <div className="overflow-y-auto p-4 h-80 space-y-3 text-gray-700">
        <p>
          Hi! I'm an undergraduate student at CMU pursuing a double major in
          Statistics and Machine Learning + AI. I've had some fun working in web
          development, agent-tool building, and data analysis for my own
          projects and at different internships/programs. My biggest interests
          at the moment are AI Alignment and ML Engineering. {}
        </p>

        <p>
          This summer, I'm intering at a SAAS startup called{" "}
          <a
            href="https://savantlabs.io/"
            target="_blank"
            className="text-theme-lb underline"
          >
            SavantLabs
          </a>
          . I recently built a generic{" "}
          <a
            href="https://www.anthropic.com/news/model-context-protocol"
            target="_blank"
            className="text-theme-lb underline"
          >
            MCP
          </a>
          (Model Context Protocol) server framework that bridges REST APIs with
          the emergings MCP protocol standard.
        </p>

        <div className="bg-gray-50 p-3 rounded-lg">
          <h4 className="font-semibold mb-2">
            🛠️ Currently working on: using my MCP infrastructure to build
            platform integration tools to monitor Savant's workflows and system
            status
          </h4>
        </div>

        <div className="border-t pt-3">
          <h3 className="font-bold mb-2">Other Interests:</h3>
          <li>Figure skating</li>
          <li>Making music</li>
          <li>Trying my hands at various crafts</li>
          <li>Running</li>
        </div>
        <h4 className="font-semibold mb-2">
          📫 Reach out to me about anything:{" "}
          <a
            href="evelynwu@andrew.cmu.edu"
            target="_blank"
            className="text-theme-lb underline font-normal"
          >
            evelynwu@andrew.cmu.edu
          </a>
        </h4>
      </div>
    </div>
  );
};

export default AboutMe;
