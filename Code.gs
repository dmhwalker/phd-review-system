  <!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <!--Let browser know website is optimized for mobile-->
      <link rel="stylesheet" href="css/app.css">
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      
      <base target="_top">
    </head>

    <body>
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper tamu-navbar">
            <a href="#" class="brand-logo">Ph.D. Review System</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="<?= getScriptUrl();?>?page=student_info.html">Student Information</a></li>
              <li class="active"><a href="<?= getScriptUrl();?>?page=student_review.html">Reviews</a></li>
              
              <li><a href="index.html">Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>

        <div class="container">

          <div class="row">
            <div class="input-field col s3">
              <select id="review-year" class="validate" onchange="get_data()">
                <option value="null" disabled selected>Select Review Year</option>
              </select>
              <label for="review-year">Review Year</label>
              
            </div>
          </div>

          
          <div id="result" style="display:none">
            <div class="row">
              <a id ="re_url"><button class="btn waves-effect waves-light" type="submit" name="action" onclick="check_re()"> View Report
              </button></a>
              <a id ="ip_url"><button class="btn waves-effect waves-light" type="submit" name="action" onclick="check_ip()"> View Improvement Plan
              </button></a>
              
              <div class="file-field input-field s3">
                <div class="btn">
                  <span>Add Report</span>
                  <input type="file" id="report">
                </div>
                <div class="file-path-wrapper s3">
                  <input class="file-path validate" type="text">
                </div>
              </div>

              <div class="file-field input-field s3">
                <div class="btn">
                  <span>Add Improvement Plan</span>
                  <input type="file" id="improvement" value="hello" >
                </div>
                <div class="file-path-wrapper s3">
                  <input class="file-path validate" type="text">
                </div>
              </div>
            </div>
          
          
          <div class="row">
            <div class="center">
               <a class="btn waves-effect waves-light cancel" onclick="reset_fields()"> Discard </a>
              <button class="btn waves-effect waves-light" onclick="if(confirm('Are you sure?'))uploadClicked()"> Upload
              </button>
            </div>
          </div>



          <div class="row">
            <div class="center">
              <button class="btn waves-effect waves-light" type="submit" name="action" onclick="get_comments()"> Get Review Details
              </button>
            </div>
          </div>
          
            
            
            <div class="row" id = "rde" style="display:none">
              <label> Comments for you </label>
              <textarea id="textarea1" class="materialize-textarea" disabled></textarea>
            </div>
          </div>
         

        </div>
        
        <div id="test">
        </div>

      <script type = "text/javascript" src = "https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <?!= include('student_review_javascript'); ?>
      <script>
        window.onload = function(){
           initialize();
          }
      </script>
      
    </body>
  </html>
