# Stage 1: Build JAR with Maven using Java 17
FROM maven:3.9.3-eclipse-temurin-17 AS build

WORKDIR /app

# Copy pom.xml and source code
COPY pom.xml .
COPY src ./src

# Build the JAR
RUN mvn clean package

# Stage 2: Use Java 17 runtime for the final image
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copy the fat JAR from build stage
COPY --from=build /app/target/portfolio-0.0.1-SNAPSHOT.jar app.jar

# Expose default Spring Boot port
EXPOSE 8080

# Set default PORT for Render
ENV PORT=8080

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]
