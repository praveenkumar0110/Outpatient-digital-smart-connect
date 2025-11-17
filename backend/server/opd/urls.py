from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HospitalViewSet, DoctorViewSet, PatientViewSet, AppointmentViewSet, PrescriptionViewSet, LabReportViewSet

router = DefaultRouter()
router.register('hospitals', HospitalViewSet)
router.register('doctors', DoctorViewSet)
router.register('patients', PatientViewSet)
router.register('appointments', AppointmentViewSet)
router.register('prescriptions', PrescriptionViewSet)
router.register('labreports', LabReportViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
