import React from "react";
import "./Content.css";
import FeatureCard from "./FeatureCard";

function Content(props) {
  const getContentTitle = selectedMenuItem => {
    switch (selectedMenuItem) {
      case 0:
        return "BASIC FEATURES";
      case 1:
        return "PREMIUM BENEFITS";
      case 2:
        return "FAQ";
      case 4:
        return "PRIVACY POLICY";
      default:
        return "CONTACT";
    }
  };

  const getContent = selectedMenuItem => {
    switch (selectedMenuItem) {
      case 0:
        return [
          <FeatureCard
            title="KEYBOARD SHORTCUTS"
            description={
              <>
                <p>
                  The main feature of shortfuts is its keyboard shortcuts.
                  There's a huge list of keyboard shortcuts, ranging from
                  searching the transfer market, buying and selling players, and
                  quick selling cards, that allow you to perform common web app
                  functions with just the press of a button.
                </p>{" "}
                <p>
                  Shortcuts are fully customizable and allow you to do what's
                  best for you.
                </p>
              </>
            }
          />,
          <FeatureCard
            title="SAFETY SETTINGS"
            description={
              <>
                <p>
                  In order to look out for my users, I've added a couple of
                  safety settings designed to help ensure users don't get
                  banned. These settings include a warning when you're searching
                  too frequently and a small delay for the "buy now" command to
                  help disguise you as a keyboard user.
                </p>{" "}
                <p>
                  These settings are enabled by default, but can be turned off
                  with a premium subscription.
                </p>
              </>
            }
          />
        ];
      case 1:
        return [
          <FeatureCard
            title="HANDS-FREE BIN"
            demo="https://streamable.com/fluq3"
            description={
              <>
                <p>
                  With this feature, shortfuts will attempt to buy the first
                  card in the search results without you needing to press
                  anything!
                </p>
              </>
            }
          />,
          <FeatureCard
            title="FUT ALERT INTEGRATION"
            demo="http://bit.ly/fut-alert-demo"
            description={
              <>
                <p>
                  With the press of a button, get the latest BIN data from FUT
                  Alert brought directly into the web app so you can ensure
                  you're buying or selling at the right price.
                </p>{" "}
                <p>
                  When fetching pricing data for a card you already own, we'll
                  automatically fill in the start/buy now price to be
                  competitive so you can sell quickly!
                </p>
              </>
            }
          />,
          <FeatureCard
            title="PROFIT CALCULATOR"
            description={
              <p>
                Using the pricing data provided by FUT Alert, we can easily
                calculate and display how much you'll gain (or lose) by selling
                a card you own at the lowest market price.
              </p>
            }
          />,
          <FeatureCard
            title="DISABLE SAFETY SETTINGS"
            description={
              <>
                <p>
                  While the safety settings are there for your... safety... many
                  users find they get in the way of sniping. If you're willing
                  to take the risk of a soft market ban, disable them for more
                  efficient sniping!
                </p>{" "}
                <p>
                  You'll be able to search to your heart's content and get near
                  0 delay between seeing and buying!
                </p>
              </>
            }
          />,
          <FeatureCard
            title="SNIPING GUARD"
            demo="https://streamable.com/ys1qp"
            description={
              <>
                <p>
                  Many users accidentally back out of the search results page
                  instinctively ready for the next search even though their
                  sniping filter may have caught something! Enable this setting
                  to ignore the "back" shortcut temporarily when there's a hit,
                  and you won't miss another card!
                </p>
              </>
            }
          />,
          <FeatureCard
            title="SNIPING FILTER PRESETS"
            demo="https://streamable.com/8avwo"
            description={
              <>
                <p>
                  Premium subscribers can save up to 3 sniping filter presets so
                  they can quickly go back to their favorite filters or toggle
                  between a few during a sniping session.
                </p>
              </>
            }
          />,
          <FeatureCard
            title="SELECT MOST RECENTLY LISTED CARD"
            demo="https://streamable.com/vo4qg"
            description={
              <>
                <p>
                  With this feature, shortfuts will automatically select the
                  most recently listed card that matches your search filter.
                  This gives you a bigger chance at sniping a card.
                </p>
              </>
            }
          />,
          <FeatureCard
            title="AUTO SELECT NEXT CARD AFTER BIN"
            demo="https://streamable.com/z9bop"
            description={
              <>
                <p>
                  With this feature, shortfuts will automatically select the
                  next card in the search results after you "buy now". This will
                  give you a better chance at sniping multiple cards that match
                  your filter (if there are multiple results).
                </p>
              </>
            }
          />,
          <FeatureCard
            title="DEVELOPER SUPPORT"
            description={
              <>
                <p>
                  By subscribing to shortfuts premium, you'll be supporting
                  software you love and the developer behind it. Subscribing
                  will ensure that this project gets love and attention, and
                  will continue to be maintained and improved.
                </p>{" "}
                <p>
                  I sincerely thank anyone who chooses to subscribe. Your
                  support means a lot to my family and me!
                </p>
              </>
            }
          />
        ];
      case 2:
        return [
          <FeatureCard
            title="CAN I GET BANNED USING SHORTFUTS?"
            description={
              <>
                <p>
                  There's been upwards of 50,000 users who have used shortfuts,
                  and I've never heard of anyone losing their account because of
                  it. There may be soft, temporary market bans, but there's
                  little risk of losing your account.
                </p>
                <p>
                  Please note that I make absolutely no guarantee of this and
                  you should use at your own risk.
                </p>
              </>
            }
          />,
          <FeatureCard
            title="HOW COME MY SHORTCUTS AREN'T WORKING?"
            description={
              <>
                <p>
                  Sometimes there are hiccups. Try clearing your cache and fully
                  restarting Google Chrome. If that doesn't work, you may need
                  to uninstall and reinstall the extension.
                </p>
                <p>
                  Still no luck? Feel free to send me an email
                  (shortfuts@gmail.com).
                </p>
              </>
            }
          />,
          <FeatureCard
            title={`WHAT DO I DO IF THE "BUY PREMIUM" BUTTON DOESN'T WORK?`}
            description={
              <p>
                If the "buy premium" button doesn't work, you can still buy
                premium via PayPal. Just use{" "}
                <a
                  href="https://www.paypal.me./martellaj/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this link
                </a>{" "}
                to send me $10 USD and the email address you use to sign into
                Google Chrome to get access for all of FIFA 20.{" "}
              </p>
            }
          />,
          <FeatureCard
            title={`WHAT DO I DO IF I DON'T HAVE A CREDIT CARD THAT WORKS WITH GOOGLE PAY?`}
            description={
              <p>
                If the "buy premium" button doesn't work, you can still buy
                premium via PayPal. Just use{" "}
                <a
                  href="https://www.paypal.me./martellaj/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this link
                </a>{" "}
                to send me $10 USD and the email address you use to sign into
                Google Chrome to get access for all of FIFA 20.{" "}
              </p>
            }
          />,
          <FeatureCard
            title={`HOW CAN I UNSUBSCRIBE?`}
            description={
              <>
                <p>
                  First of all, you really shouldn't. It's great, I'm great, and
                  you should support it/me.
                </p>
                <p>
                  If you really want to unsubscribe, simply go to your{" "}
                  <a
                    href="https://pay.google.com/payments/u/home#subscriptionsAndServices"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Pay subscriptions page
                  </a>{" "}
                  to manage your subscription.
                </p>
              </>
            }
          />
        ];
      case 4:
        return (
          <div>
            <h1>Privacy Policy for shortfuts</h1>

            <p>
              At shortfuts, accessible from the shortfuts Google Chrome
              extension, one of our main priorities is the privacy of our
              visitors. This Privacy Policy document contains types of
              information that is collected and recorded by shortfuts and how we
              use it.
            </p>

            <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <h2>Log Files</h2>

            <p>
              shortfuts follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>

            <h2>Privacy Policies</h2>

            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of shortfuts. Our Privacy Policy was
              created with the help of the{" "}
              <a href="https://www.privacypolicygenerator.info">
                Privacy Policy Generator
              </a>{" "}
              and the{" "}
              <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">
                Online Privacy Policy Generator
              </a>
              .
            </p>

            <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on shortfuts,
              which are sent directly to users' browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </p>

            <p>
              Note that shortfuts has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>

            <h2>Third Party Privacy Policies</h2>

            <p>
              shortfuts's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options. You may find a complete list of
              these Privacy Policies and their links here: Privacy Policy Links.
            </p>

            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites. What Are Cookies?
            </p>

            <h2>Children's Information</h2>

            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p>
              shortfuts does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>

            <h2>Online Privacy Policy Only</h2>

            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in shortfuts. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>

            <h2>Consent</h2>

            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p>
          </div>
        );
      default:
        return [
          <FeatureCard
            title="EMAIL"
            description={
              <p>
                Feel free to send me any questions to my email
                (shortfuts@gmail.com).
              </p>
            }
          />
        ];
    }
  };

  return (
    <div className="Content--container">
      <h2 className="Content--title">
        {getContentTitle(props.selectedMenuItem)}
      </h2>
      {getContent(props.selectedMenuItem)}
    </div>
  );
}

export default Content;
