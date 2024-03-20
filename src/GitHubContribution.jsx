import React, { useEffect, useState } from "react";
import axios from "axios";
import "./githubCal.css";

function GitHubContribution({ username, token }) {
  const [contributionData, setContributionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.github.com/graphql",
          {
            query: `
              query($username: String!, $from: DateTime!, $to: DateTime!) {
                user(login: $username) {
                  contributionsCollection(from: $from, to: $to) {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          date
                          contributionCount
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: {
              username: username,
              from: new Date(
                new Date().setDate(new Date().getDate() - 34)
              ).toISOString(),
              to: new Date().toISOString(),
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.data.user.contributionsCollection) {
          setContributionData(
            response.data.data.user.contributionsCollection.contributionCalendar
              .weeks
          );
        } else {
          console.error("Error fetching data:", response.data.errors);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub contribution data:", error);
      }
    };

    fetchData();
  }, [username, token]);

  if (!contributionData) {
    return <h1>Loading...</h1>;
  }

  const contributionArray = [];
  const contributionObj = {};

  contributionData.forEach((week) => {
    week.contributionDays.forEach((day) => {
      contributionArray.push(day.contributionCount > 1);
      contributionObj[day.date] = day.contributionCount;
    });
  });

  console.log(contributionArray);

  return (
    <div>
      <h1>GitHub Contribution</h1>
      <div className="github-calendar">
        {contributionArray.map((contribution, i) => {
          return contribution ? (
            <p key={i} className="Done">
              {i}
            </p>
          ) : (
            <p key={i} className="Nope">
              {i}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default GitHubContribution;
