<?php
  $title = "Contact Us || Top PPC Services";
  include('header.php');
?>
    <main class="start_site" id="home">

      <!--============ start hero section ============-->
      <section id="Hero_section" class="style_1"  style="background: url(img/banner-4.png);">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="hero_content">
                <h1 class="hero_tit text-capitalize margin_bottom" data-wow-delay=".5s">Contact Us</h1>
                
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="hero_img before_orng">
                <img class="w-100" src="img/phone.jpg" alt="pic">
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--============ end hero section ============-->
      <!--============ start contact us section ============-->
      <section id="contact_section" class="text-center contact_style_1">
        <div class="contact__us">
          <div class="container">
            <h1 class="section_tit orange text-uppercase"><span>Get In Touch</span></h1>
            
            <div class="contact-us">
			 <div class="row">
               <div class="col-sm-12 col-md-7">
			  <form class="margin_top" action="mailsend.php" method="post">
                  <div class="row">
                    <div class="col">
                      <input type="text" id="your_name" class="form-input w-100" name="name" placeholder="Full Name" required>
                    </div>
                    <div class="col">
                      <input type="text" id="phone" class="form-input w-100" name="phone" placeholder="Phone">
                    </div>
                  </div>
                  <input type="email" id="email" class="form-input w-100" name="email" placeholder="Email" required>
                  <textarea class="form-input w-100" id="message" placeholder="Message" name="message"></textarea>
                  <textarea class="form-input w-100" id="message" placeholder="Address" name="address"></textarea>
                  <button id="contact_submit" class="lightpurple_btn br_25 w-100 text-uppercase" type="submit" name="submit">submit <i class="float-right hidden fa-spin fas fa-circle-notch"></i></button>
                  <div id="msgSubmit" class="h3 text-center hidden">Message Submitted! Thanks :)</div>
                </form>
				</div>
          
              <div class="col-sm-12 col-md-5">
			 <div class="iconic-contact-info">
						<div class="contact-info-head">
							<h2>Contact Information</h2>
							
						</div>
						<ul class="f-contact-list">
							<li><span>Address:</span> Top PPC Services Avenue, Upper Top PPC Services Side,<br> New Top PPC Services</li>
							<li><span>Office:</span> 00 Upper Top PPC Services Side, Top PPC Services</li>
							<li><span>Call Us:</span> +x-xxx-xxxx-xx</li>
							<li><span>Email Us:</span> contact@topppcservices.com</li>
						</ul>
					</div>
				</div>
          </div>
            </div>
          </div>
        </div>
      </section>
      <!--============ end contact us section ============-->
     
    </main>
   <?php include('footer.php'); ?>