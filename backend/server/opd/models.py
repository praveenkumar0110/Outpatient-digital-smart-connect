from django.db import models
import qrcode
from io import BytesIO
from django.core.files import File

class Hospital(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    contact_number = models.CharField(max_length=20)
    rating = models.FloatField(default=0)

    def __str__(self):
        return self.name


class Doctor(models.Model):
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE, related_name="doctors")
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    experience = models.IntegerField()
    available_from = models.TimeField()
    available_to = models.TimeField()

    def __str__(self):
        return f"{self.name} ({self.specialization})"


class Patient(models.Model):
    digital_health_id = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    phone = models.CharField(max_length=15)
    address = models.TextField()

    def __str__(self):
        return self.name


class Appointment(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    date = models.DateField()
    time_slot = models.TimeField()
    token_number = models.IntegerField()
    qr_code = models.ImageField(upload_to='qr_codes/', blank=True, null=True)

    def save(self, *args, **kwargs):
        qr = qrcode.make(f"Appointment Token: {self.token_number}\nPatient: {self.patient.name}\nDoctor: {self.doctor.name}")
        buffer = BytesIO()
        qr.save(buffer, format='PNG')
        self.qr_code.save(f"token_{self.token_number}.png", File(buffer), save=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.patient.name} - {self.doctor.name} ({self.token_number})"


class Prescription(models.Model):
    appointment = models.OneToOneField(Appointment, on_delete=models.CASCADE)
    medicine = models.TextField()
    advice = models.TextField(blank=True)

    def __str__(self):
        return f"Prescription for {self.appointment.patient.name}"


class LabReport(models.Model):
    appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE)
    test_name = models.CharField(max_length=100)
    result = models.TextField()
    report_file = models.FileField(upload_to='lab_reports/')

    def __str__(self):
        return f"{self.test_name} - {self.appointment.patient.name}"
