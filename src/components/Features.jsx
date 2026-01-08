import { CameraVideo, Download, Stars } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const features = [
  {
    icon: <CameraVideo size={24} />,
    title: "One-Click Recording",
    description:
      "Start recording your screen with a single click. No complex setup required.",
    bgColor: "#e0f2fe", // أزرق فاتح
    iconColor: "#2563EB",
  },
  {
    icon: <Download size={24} />,
    title: "Instant Download",
    description:
      "Download your recordings instantly in high quality video format.",
    bgColor: "#ede9fe", // بنفسجي فاتح
    iconColor: "#7C3AED",
  },
  {
    icon: <Stars size={24} />,
    title: "100% Private",
    description:
      "All recordings stay on your device. We never upload or store your videos.",
    bgColor: "#fce7f3", // وردي فاتح
    iconColor: "#DB2777",
  },
];
const Features = () => {
  return (
    <Container>
      <Row>
        {features.map((feature, index) => {
          return (
            <Col xs={12} lg={4} md={6} key={index} className="feature-card mb-4">
              <Card className="h-100 shadow-sm p-3 text-center border-0 ">
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: feature.bgColor,
                    color: feature.iconColor,
                  }}
                >
                  {feature.icon}
                </div>
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Features;
