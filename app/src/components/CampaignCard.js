import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function CampaignCard({ campaign }) {
  console.log(campaign);

  return (
    <React.Fragment>
      {campaign ? (
        <Container
          fluid
          style={{
            marginTop: "3px",
            marginBottom: "3px",
          }}
        >
          <Row>
            <div>
              <Image
                rounded={true}
                style={{ width: "4rem" }}
                src={campaign.campaign_icon_url}
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ fontWeight: "bold" }}>{campaign.campaign_name}</p>
              <p style={{ fontWeight: "bold", color: "green" }}>
                {campaign.pay_per_install} {" per install"}
              </p>
            </div>
          </Row>
          <Row className="d-flex flex-row flex-nowrap overflow-auto">
            {campaign.medias.map((media) => (
              <Col xs={4}>
                {" "}
                <Card
                  style={{
                    marginTop: "3px",
                    marginBottom: "3px",
                    width: "7rem",
                    height: "280px",
                  }}
                >
                  <div>
                    {media.media_type === "video" ? (
                      <Button
                        style={{
                          position: "absolute",
                          top: "80px",
                          left: "35px",
                        }}
                        size="md"
                        color="white"
                        variant="outline-light"
                      >
                        <FontAwesomeIcon icon={solid("play")} />{" "}
                      </Button>
                    ) : (
                      ""
                    )}

                    <Card.Img
                      style={{ width: "7rem", minHeight: "200px" }}
                      variant="top"
                      src={media.cover_photo_url}
                    />
                  </div>

                  <Card.Body>
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(media.tracking_link);
                      }}
                      size="sm"
                      variant="light"
                    >
                      <FontAwesomeIcon icon={solid("link")} />{" "}
                    </Button>
                    <a
                      href={media.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <Button size="sm" variant="light">
                        <FontAwesomeIcon icon={solid("download")} />{" "}
                      </Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
