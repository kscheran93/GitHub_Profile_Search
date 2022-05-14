import React from 'react'

function DisplayTable({data, repositories}) {
  return (
  <div>
          <table className="ui celled table">
          <thead>
          <tr><th>Username</th>
          <th>Profile Picture</th>
          <th>URL</th>
          <th>Repositories</th>
          </tr></thead>
          <tbody>
          <tr>
          {
          <td data-label>{data.login}</td>
          }
          {
          <img height='100' width='100' src={data.avatar_url}></img>
          }
          {
           <td data-label>{data.url}</td>    
          }
          {
              <td>
                 {repositories.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
              </td>
          }
    </tr>
  
  </tbody>
</table>
    </div>
  )
}

export default DisplayTable