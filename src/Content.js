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
                                    The main feature of shortfuts is its
                                    keyboard shortcuts. There's a huge list of
                                    keyboard shortcuts, ranging from searching
                                    the transfer market, buying and selling
                                    players, and quick selling cards, that allow
                                    you to perform common web app functions with
                                    just the press of a button.
                                </p>{" "}
                                <p>
                                    Shortcuts are fully customizable and allow
                                    you to do what's best for you.
                                </p>
                            </>
                        }
                    />,
                    <FeatureCard
                        title="SAFETY SETTINGS"
                        description={
                            <>
                                <p>
                                    In order to look out for my users, I've
                                    added a couple of safety settings designed
                                    to help ensure users don't get banned. These
                                    settings include a warning when you're
                                    searching too frequently and a small delay
                                    for the "buy now" command to help disguise
                                    you as a keyboard user.
                                </p>{" "}
                                <p>
                                    These settings are enabled by default, but
                                    can be turned off with a premium
                                    subscription.
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
                                    With this feature, shortfuts will attempt to
                                    buy the first card in the search results
                                    without you needing to press anything!
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
                                    With the press of a button, get the latest
                                    BIN data from FUT Alert brought directly
                                    into the web app so you can ensure you're
                                    buying or selling at the right price.
                                </p>{" "}
                                <p>
                                    When fetching pricing data for a card you
                                    already own, we'll automatically fill in the
                                    start/buy now price to be competitive so you
                                    can sell quickly!
                                </p>
                            </>
                        }
                    />,
                    <FeatureCard
                        title="PROFIT CALCULATOR"
                        description={
                            <p>
                                Using the pricing data provided by FUT Alert, we
                                can easily calculate and display how much you'll
                                gain (or lose) by selling a card you own at the
                                lowest market price.
                            </p>
                        }
                    />,
                    <FeatureCard
                        title="DISABLE SAFETY SETTINGS"
                        description={
                            <>
                                <p>
                                    While the safety settings are there for
                                    your... safety... many users find they get
                                    in the way of sniping. If you're willing to
                                    take the risk of a soft market ban, disable
                                    them for more efficient sniping!
                                </p>{" "}
                                <p>
                                    You'll be able to search to your heart's
                                    content and get near 0 delay between seeing
                                    and buying!
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
                                    Many users accidentally back out of the
                                    search results page instinctively ready for
                                    the next search even though their sniping
                                    filter may have caught something! Enable
                                    this setting to ignore the "back" shortcut
                                    temporarily when there's a hit, and you
                                    won't miss another card!
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
                                    Premium subscribers can save up to 3 sniping
                                    filter presets so they can quickly go back
                                    to their favorite filters or toggle between
                                    a few during a sniping session.
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
                                    With this feature, shortfuts will
                                    automatically select the most recently
                                    listed card that matches your search filter.
                                    This gives you a bigger chance at sniping a
                                    card.
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
                                    With this feature, shortfuts will
                                    automatically select the next card in the
                                    search results after you "buy now". This
                                    will give you a better chance at sniping
                                    multiple cards that match your filter (if
                                    there are multiple results).
                                </p>
                            </>
                        }
                    />,
                    <FeatureCard
                        title="DEVELOPER SUPPORT"
                        description={
                            <>
                                <p>
                                    By subscribing to shortfuts premium, you'll
                                    be supporting software you love and the
                                    developer behind it. Subscribing will ensure
                                    that this project gets love and attention,
                                    and will continue to be maintained and
                                    improved.
                                </p>{" "}
                                <p>
                                    I sincerely thank anyone who chooses to
                                    subscribe. Your support means a lot to my
                                    family and me!
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
                                    There's been upwards of 50,000 users who
                                    have used shortfuts, and I've never heard of
                                    anyone losing their account because of it.
                                    There may be soft, temporary market bans,
                                    but there's little risk of losing your
                                    account.
                                </p>
                                <p>
                                    Please note that I make absolutely no
                                    guarantee of this and you should use at your
                                    own risk.
                                </p>
                            </>
                        }
                    />,
                    <FeatureCard
                        title="HOW COME MY SHORTCUTS AREN'T WORKING?"
                        description={
                            <>
                                <p>
                                    Sometimes there are hiccups. Try clearing
                                    your cache and fully restarting Google
                                    Chrome. If that doesn't work, you may need
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
                                If the "buy premium" button doesn't work, you
                                can still buy premium via PayPal. Just use{" "}
                                <a
                                    href="https://www.paypal.me./martellaj/10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    this link
                                </a>{" "}
                                to send me $10 USD and the email address you use
                                to sign into Google Chrome to get access for all
                                of FIFA 20.{" "}
                                <strong>
                                    PayPal payments are processed on Sunday of
                                    each week. You must pay by Saturday to
                                    ensure you will get processed for that week.
                                </strong>
                            </p>
                        }
                    />,
                    <FeatureCard
                        title={`WHAT DO I DO IF I DON'T HAVE A CREDIT CARD THAT WORKS WITH GOOGLE PAY?`}
                        description={
                            <p>
                                If the "buy premium" button doesn't work, you
                                can still buy premium via PayPal. Just use{" "}
                                <a
                                    href="https://www.paypal.me./martellaj/10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    this link
                                </a>{" "}
                                to send me $10 USD and the email address you use
                                to sign into Google Chrome to get access for all
                                of FIFA 20.{" "}
                                <strong>
                                    PayPal payments are processed on Sunday of
                                    each week. You must pay by Saturday to
                                    ensure you will get processed for that week.
                                </strong>
                            </p>
                        }
                    />,
                    <FeatureCard
                        title={`HOW CAN I UNSUBSCRIBE?`}
                        description={
                            <>
                                <p>
                                    First of all, you really shouldn't. It's
                                    great, I'm great, and you should support
                                    it/me.
                                </p>
                                <p>
                                    If you really want to unsubscribe, simply go
                                    to your{" "}
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