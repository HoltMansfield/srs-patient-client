import React, { Component } from 'react'
import { Swipeable, defineSwipe } from 'react-touch'
import { Link } from 'react-router-dom'
import { DatePicker, Card, Row, Col, Button, Icon } from 'antd'



export class LandingPage extends Component {
  render() {
    const swipe = defineSwipe({swipeDistance: 5});

    return (
      <div>
        <div>
          <Button type="primary" icon="user" className="button-text">
            Login
          </Button>
          <Button icon="user" className="button-text margin-left-10">
            Create Account
          </Button>
        </div>
        <Card title="About Us" className="margin-top-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae. Elementum nibh tellus molestie nunc non blandit massa. Pellentesque habitant morbi tristique senectus et netus. Mattis aliquam faucibus purus in massa tempor. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Sed risus ultricies tristique nulla.  Diam quam nulla porttitor massa id neque. Vitae aliquet nec ullamcorper sit. Aenean et tortor at risus viverra adipiscing at in. Id diam maecenas ultricies mi eget mauris. At elementum eu facilisis sed odio morbi quis. Aliquam eleifend mi in nulla. Eu tincidunt tortor aliquam nulla facilisi. In nibh mauris cursus mattis molestie a. Non enim praesent elementum facilisis leo vel.
          </p>
          <p>
            Viverra vitae congue eu consequat ac. Sit amet massa vitae tortor condimentum. Sodales neque sodales ut etiam sit amet nisl. Nisl purus in mollis nunc sed. Aenean euismod elementum nisi quis. Volutpat ac tincidunt vitae semper. Id porta nibh venenatis cras. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vitae proin sagittis nisl rhoncus. Massa enim nec dui nunc mattis enim ut tellus. Tincidunt arcu non sodales neque sodales. Urna nunc id cursus metus aliquam eleifend mi in nulla. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Eu turpis egestas pretium aenean.
          </p>
          <p>
            Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Lorem ipsum dolor sit amet consectetur adipiscing elit. Lacus vel facilisis volutpat est velit egestas dui id ornare. Auctor augue mauris augue neque. Vitae sapien pellentesque habitant morbi tristique. Volutpat lacus laoreet non curabitur gravida arcu. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Odio eu feugiat pretium nibh ipsum consequat nisl. Risus ultricies tristique nulla aliquet enim tortor. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Augue mauris augue neque gravida in fermentum et. Mollis aliquam ut porttitor leo. Egestas sed tempus urna et pharetra pharetra massa massa. Viverra accumsan in nisl nisi scelerisque eu ultrices. At lectus urna duis convallis. Fames ac turpis egestas maecenas pharetra. Adipiscing elit duis tristique sollicitudin nibh sit. Dictumst vestibulum rhoncus est pellentesque elit. Vulputate sapien nec sagittis aliquam malesuada bibendum.
          </p>
          <p>
            Vel quam elementum pulvinar etiam non quam lacus suspendisse. Vulputate mi sit amet mauris commodo quis imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla malesuada pellentesque elit eget. Sed viverra tellus in hac habitasse platea. Bibendum neque egestas congue quisque egestas diam in arcu. Dolor purus non enim praesent elementum facilisis leo. Ut diam quam nulla porttitor massa id neque. Dui faucibus in ornare quam viverra orci sagittis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Vitae tempus quam pellentesque nec nam aliquam. Purus faucibus ornare suspendisse sed nisi. At imperdiet dui accumsan sit amet nulla facilisi.
          </p>
          <p>
            Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Leo a diam sollicitudin tempor id. Tortor id aliquet lectus proin. Cras adipiscing enim eu turpis egestas pretium aenean. Pellentesque elit ullamcorper dignissim cras. Aliquam sem fringilla ut morbi. Congue eu consequat ac felis. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Eu non diam phasellus vestibulum lorem sed. Vitae justo eget magna fermentum. Dui faucibus in ornare quam viverra orci sagittis eu. Elit eget gravida cum sociis natoque penatibus et magnis dis. Egestas integer eget aliquet nibh. Blandit libero volutpat sed cras ornare arcu dui vivamus. Dolor magna eget est lorem.
          </p>
        </Card>
      </div>

    )
  }
}

export default LandingPage
